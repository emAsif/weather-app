import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import {WeatherReport} from '../types/weatherReport';

const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getCurrentWeather(loc: string): Observable<WeatherReport> {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&appid=${apiKey}`) as Observable<WeatherReport>;
  }

  getForecast(loc: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&appid=${apiKey}`);
  }
}
