import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {WeatherService} from '../../shared/services/weather.service';
import {interval} from 'rxjs';
import {Report, WeatherReport} from '../../shared/types/weatherReport';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  animations: [
  trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ])
]
})

export class DashboardComponent implements OnInit {
  timeInterval = interval(6000000);
  city = 'koblenz';
  isLoading = true;
  error: string | undefined;
  report: Report | undefined;
  constructor(private readonly weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCurrentWeather(this.city);
    this.timeInterval.subscribe(() => this.getCurrentWeather(this.city));
  }

  getCurrentWeather(city: string): any{
    this.isLoading = true;
    this.weatherService.getCurrentWeather(city).subscribe(response => {
      this.report =
        {
          temp: response.main.temp - 273.15,
          icon: response.weather[0].icon,
          description: response.weather[0].description,
          city: response.name
        };
      this.isLoading = false;
      console.log(response);
    }, error => {
      this.isLoading = false;
      this.error = error.message;
      // console.log('error console', error);
    });
  }
}
