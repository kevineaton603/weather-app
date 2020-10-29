import { ITemperature } from "../models/temperature";
import { IWeatherCondition } from "../models/weather-condition";

const API_KEY = "dd564605fde0370a9b99f98d80729b18";

interface IBaseWeatherRequestOptions {
  latitude: number;
  longitude: number;
}

interface ICurrentWeatherRequestOptions extends IBaseWeatherRequestOptions {
  mode?: string;
  units?: string;
  lang?: string;
}

interface IDailyForecastRequestOptions extends IBaseWeatherRequestOptions {
  count?: number;
  mode?: string;
  units?: string;
  lang?: string;
}

export interface ICurrentWeatherResponse {
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: IWeatherCondition[];
}

export interface IFiveDayForecastResponseListItem {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: ITemperature;
  pop: number;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: IWeatherCondition[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface IFiveDayForecastResponse {
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: IFiveDayForecastResponseListItem[];
  message: 0;
}

const getCurrentWeather = async (
  options: Partial<ICurrentWeatherRequestOptions>
) => {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${options.latitude}&lon=${options.longitude}&appid=${API_KEY}`
    );
    const json = await res.json();
    return json as ICurrentWeatherResponse;
  } catch (error) {
    console.error(error);
  }
};

const getDailyForecast = async (
  options: Partial<IDailyForecastRequestOptions>
) => {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${
        options.latitude
      }&lon=${options.longitude}&cnt=${options.count || 7}&appid=${API_KEY}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const getFiveDayForecast = async (
  options: Partial<IBaseWeatherRequestOptions>
): Promise<IFiveDayForecastResponse | undefined> => {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${options.latitude}&lon=${options.longitude}&appid=${API_KEY}`
    );
    const json = await res.json();
    return json as IFiveDayForecastResponse;
  } catch (error) {
    console.error(error);
  }
};

export { getCurrentWeather, getDailyForecast, getFiveDayForecast };
