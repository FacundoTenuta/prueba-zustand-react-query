import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CircularProgress,
} from '@nextui-org/react';
import { useGetWeather } from '../services/services';
import { FC } from 'react';

interface CurrentWeatherCardProps {
  titulo: string;
  coords: {
    lat: number;
    lon: number;
  };
}

export const CurrentWeatherCard: FC<CurrentWeatherCardProps> = ({
  titulo = 'Clima',
  coords,
}) => {
  const { data, isLoading, isFetching, refetch } = useGetWeather(coords, {
    refetchOnWindowFocus: false,
  });

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
          <p>Temperatura actual: {data.current_weather.temperature} °C</p>
        )}
      </CardBody>
      <CardFooter className="flex justify-end">
        <Button onClick={() => refetch()}>Actualizar</Button>
      </CardFooter>
    </Card>
  );
};
