import create from "zustand";
import {
  getCurrentWeather,
  getFiveDayForecast,
  ICurrentWeatherResponse,
  IFiveDayForecastResponse,
} from "../data-source/weather";

type IUseWeatherStore = {
  currentWeather: ICurrentWeatherResponse | undefined;
  fiveDayForecast: IFiveDayForecastResponse | undefined;
  fetchCurrentWeather: (position: Position) => Promise<void>;
  fetchFiveDayForecast: (position: Position) => Promise<void>;
};

const useWeatherStore = create<IUseWeatherStore>((set, get) => ({
  currentWeather: undefined,
  fiveDayForecast: undefined,
  fetchCurrentWeather: async (position: Position) => {
    const response = await getCurrentWeather({
      latitude: position?.coords.latitude,
      longitude: position?.coords.longitude,
    });
    if (response) {
      set({ currentWeather: response });
    }
  },
  fetchFiveDayForecast: async (position: Position) => {
    const response = await getFiveDayForecast({
      latitude: position?.coords.latitude,
      longitude: position?.coords.longitude,
    });
    if (response) {
      set({ fiveDayForecast: response });
    }
  },
}));

export default useWeatherStore;
