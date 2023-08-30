import { create } from 'zustand';
import { getWeather } from '../services/services';

interface WeatherStore {
  currentWeather: any;
  fetchCurrentWeather: (coords: { lat: number; lon: number }) => void;
}

export const useWeatherStore = create<WeatherStore>(set => ({
  currentWeather: null,

  fetchCurrentWeather: (coords: { lat: number; lon: number }) => {
    set({ currentWeather: null });
    getWeather(coords).then(data =>
      set({ currentWeather: data.current_weather }),
    );
  },
}));
