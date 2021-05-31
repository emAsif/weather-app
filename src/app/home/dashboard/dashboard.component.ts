import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {WeatherService} from '../../shared/services/weather.service';
import {forkJoin} from 'rxjs';
import {Report} from '../../shared/interfaces/IWeatherReport';
import {IForecast} from '../../shared/interfaces/IForecast';
import {FormGroup} from '@angular/forms';
import {IMsg} from '../../shared/interfaces/errorMsg';

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
  city: string | undefined;
  isLoading: boolean | undefined;
  error: boolean | undefined;
  isRendered: boolean | undefined;
  startInterval: any;
  report: Report | undefined;
  forecast: IForecast | undefined;
  units = [{name: 'Celsius', des: 'metric'}, {name: 'Fahrenheit', des: 'imperial'}, {name: 'Kelvin', des: 'standard'}];
  unit = 'metric'; // to keep radio box checked.

  // displaying messages based on current status- by default info message will be loaded.
  msg: IMsg = { statusCode: 100, message: 'Info: Enter the location to check the current and forecast weather'};

  constructor(private readonly weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

  // multi subscription handled using forkjoin
  weatherUpdates(location: string, unit: string): void {
    forkJoin({
      weatherReport: this.weatherService.getCurrentWeather(location, unit),
      forecast: this.weatherService.getForecast(location, unit)
    }).subscribe(({weatherReport, forecast}) => {
      this.forecast = forecast;
      this.report =
        {
          temp: weatherReport.main.temp,
          icon: weatherReport.weather[0].icon,
          description: weatherReport.weather[0].description,
          city: weatherReport.name,
          unit
        };
      this.isLoading = false;
      this.error = false;
      this.isRendered = true;
      this.msg.statusCode = 200;
      this.msg.message = 'Successfully Loaded.';
    }, error => {
      this.isLoading = false;
      this.error = true;
      this.msg.statusCode = 404;
      this.msg.message = 'API Error: Either the Location is invalid or not supported';
    });
  }
  // Handle API request and interval call
  submit(form: FormGroup): void {
    if (form.valid) {
      this.isLoading = true;
      const {location, unit} = form.value;
      this.weatherUpdates(location, unit); // first independent call to API

      clearInterval(this.startInterval);
      this.startInterval = setInterval(() => this.weatherUpdates(location, unit), 100000);
    }
  }
}
