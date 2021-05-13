import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {WeatherService} from '../../shared/services/weather.service';
import {interval} from 'rxjs';
import {Report} from '../../shared/models/IWeatherReport';
import {IForecast} from '../../shared/models/IForecast';
import {TempUnit} from '../../shared/models/tempUnit';
import {FormGroup} from '@angular/forms';
import {mergeMap} from 'rxjs/operators';

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
    this.getCurrentWeather(city);
    this.getHourlyForecast(city);
    this.timeInterval.subscribe(() => {
      this.getCurrentWeather(city);
      this.getHourlyForecast(city);
    });
  }
  getCurrentWeather(city: string): void{
    this.isLoading = true;
    this.weatherService.getCurrentWeather(city).subscribe(response => {
      this.report =
        {
          temp: response.main.temp,
          icon: response.weather[0].icon,
          description: response.weather[0].description,
          city: response.name
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
  getHourlyForecast(loc: string): void {
    this.weatherService.getForecast(loc, TempUnit.Metric).subscribe(response => {
        this.forecast = response;
        this.isLoading = false;
        this.msg = 'Enter the location to check the current and forecast weather';
        this.error = false;
      }, error => {
      this.isLoading = false;
      this.msg = 'API Error: Either the Location is invalid or not supported';
      this.error = true;
      });
  }

  changeWeatherUnit(unit: TempUnit): void{
    switch (unit){
      case TempUnit.Standard:
        // TODO APPLY FORMULA FOR TEMP UNIT CONVERSION:
        break;
      case TempUnit.Metric:
        // TODO APPLY FORMULA FOR TEMP UNIT CONVERSION:
        break;
      case TempUnit.Imperial:
        // TODO APPLY FORMULA FOR TEMP UNIT CONVERSION:
        break;
      default:
        break;
    }
  }

  submit(form: FormGroup): void{
    if (form.status === 'VALID') {
      this.onSearch(form.value.location);
    }
  }
}
