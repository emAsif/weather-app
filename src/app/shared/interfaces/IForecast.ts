import {IClouds, ICoord, IMain} from './IWeatherReport';

export interface IForecast {
  city: ICity;
  cnt: number;
  cod: string;
  list: IList[];
  message: number;
}

export interface ICity {
  id: number;
  name: string;
  coord: ICoord;
  country: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface IWind {
  deg: number;
  gust: number;
  speed: number;
}

export interface IMainForeCast extends IMain{
  grnd_level: number;
  humidity: number;
  sea_level: number;
  temp_kf: number;
}

export interface ISys {
  pod: string;
}

export interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IList {
  clouds: IClouds;
  main: IMainForeCast;
  dt: number;
  dt_txt: string;
  pop: number;
  visibility: number;
  weather: IWeather[];
  sys: ISys;
  wind: IWind;
}

