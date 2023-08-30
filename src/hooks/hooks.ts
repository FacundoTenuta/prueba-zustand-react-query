import { useQuery } from '@tanstack/react-query';
import { useWeatherStore } from '../store/store';

export const useRefreshWeatherLocation = (location: {
  lat: number;
  lon: number;
}) => {
  const fetchCurrentWeather = useWeatherStore(
    state => state.fetchCurrentWeather,
  );
  const result = useQuery(
    ['weather-zustand'],
    () => fetchCurrentWeather(location),
    {
      refetchOnWindowFocus: false,
    },
  );
  return result;
};
