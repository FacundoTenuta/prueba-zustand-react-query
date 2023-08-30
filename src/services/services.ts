import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const getWeather = ({ lat, lon }: { lat: number; lon: number }) => {
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`,
  )
    .then(response => response.json())
    .then(data => data);
};

export const useGetWeather = (
  coords: { lat: number; lon: number },
  config?: Omit<
    UseQueryOptions<any, unknown, any, string[]>,
    'queryKey' | 'queryFn'
  >,
) => useQuery(['weather'], () => getWeather(coords), config);
