import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {IWeatherReport} from '../interfaces/IWeatherReport';
import {IForecast} from '../interfaces/IForecast';

const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {
  }

  getCurrentWeather(loc: string, unit: string): Observable<IWeatherReport> {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&units=${unit}&appid=${apiKey}`) as Observable<IWeatherReport>;
  }

  getForecast(loc: string, unit: string): Observable<IForecast> {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&units=${unit}&appid=${apiKey}`) as Observable<IForecast>;
  }
}
