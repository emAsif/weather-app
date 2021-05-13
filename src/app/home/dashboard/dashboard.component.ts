import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {WeatherService} from '../../shared/services/weather.service';
import {forkJoin, interval} from 'rxjs';
import {IWeatherReport, Report} from '../../shared/models/IWeatherReport';
import {IForecast} from '../../shared/models/IForecast';
import {TempUnit} from '../../shared/models/tempUnit';
import {FormGroup} from '@angular/forms';
import {map, merge, mergeMap} from 'rxjs/operators';

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
  timeInterval = interval(100000);
  city: string | undefined;
  isLoading = true;
  error: boolean | undefined;
  report: Report | undefined;
  forecast: IForecast | undefined;
  location: string | undefined;
  msg = 'Enter the location to check the current and forecast weather';

  constructor(private readonly weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  onSearch(city: string): void {
    this.weatherUpdates(city);
    this.timeInterval.subscribe(() => {
      this.weatherUpdates(city);
    });
  }
  weatherUpdates(location: string): void {
    forkJoin({
      weatherReport: this.weatherService.getCurrentWeather(location, TempUnit.Metric),
      forecast: this.weatherService.getForecast(location, TempUnit.Metric)
    }).subscribe(({weatherReport, forecast}) => {
          this.forecast = forecast;
          this.report =
          {
            temp: weatherReport.main.temp,
            icon: weatherReport.weather[0].icon,
            description: weatherReport.weather[0].description,
            city: weatherReport.name
          };
          this.isLoading = false;
          this.error = false;
          this.msg = 'Enter the location to check the current and forecast weather';
      }, error => {
        this.isLoading = false;
        this.msg = 'API Error: Either the Location is invalid or not supported';
        this.error = true;
      });
  }

  submit(form: FormGroup): void{
    if (form.status === 'VALID') {
      this.weatherUpdates(form.value.location);
    }
  }
}
