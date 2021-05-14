import {IForecast, IWeather} from './IForecast';

export interface IWeatherReport {
  base: string;
  clouds: IClouds;
  cod: number;
  coord: ICoord;
  dt: number;
  id: number;
  main: IMain;
  name: string;
  sys: ISys;
  timezone: number;
  visibility: number;
  weather: IWeather[];
  wind: IWind;
}

export type Report = {
  temp: number;
  icon: string;
  city: string;
  description: string;
  unit: string;
};

export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IClouds {
  all: number;
}

export interface ICoord {
  lon: number;
  lat: number;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
}
