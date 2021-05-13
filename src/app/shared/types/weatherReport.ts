export type WeatherReport = {
  base: string;
  clouds: clouds;
  cod: number;
  coord: coord;
  dt: number;
  id: number;
  main: main;
  name: string;
  sys: sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: wind;
};

export type Report = {
  temp: number;
  icon: string;
  city: string;
  description: string;
};

export type wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type clouds = {
  all: number;
};

export type coord = {
  lon: number;
  lat: number;
};

export type main = {
  temp: number;
  feels_like: number;
  tamp_min: number;
  temp_max: number;
  pressure: number;
};
