import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CircularProgress,
} from '@nextui-org/react';
import { FC } from 'react';
import { useWeatherStore } from '../store/store';
import { useRefreshWeatherLocation } from '../hooks/hooks';

interface CurrentWeatherCardZustandProps {
  titulo: string;
  coords: {
    lat: number;
    lon: number;
  };
}

export const CurrentWeatherCardZustand: FC<CurrentWeatherCardZustandProps> = ({
  titulo = 'Clima',
  coords,
}) => {
  const { currentWeather } = useWeatherStore();

  console.log(currentWeather);

  const { data, isLoading, isFetching, refetch } =
    useRefreshWeatherLocation(coords);

  console.log(data, isLoading, isFetching);

  return (
    <Card className="m-4 bg-slate-600 p-4 shadow-lg">
      <CardHeader className="flex h-12 justify-between">
        <div className="text-xl font-bold text-white">{titulo}</div>
        {isFetching && <CircularProgress className="h-full" />}
      </CardHeader>
      <CardBody>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <p>Temperatura actual: {currentWeather?.temperature} °C</p>
        )}
      </CardBody>
      <CardFooter className="flex justify-end">
        <Button onClick={() => refetch()}>Actualizar</Button>
      </CardFooter>
    </Card>
  );
};
