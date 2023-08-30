import { Divider } from '@nextui-org/react';
import { CurrentWeatherCard } from './components/CurrentWeatherCard';
import { UBICACION } from './data';
import { CurrentWeatherCardZustand } from './components/CurrentWeatherCardZustand';

const App = () => {
  return (
    <main className="min-h-screen bg-background text-foreground dark">
      <div className="h-full w-full p-4">
        <p>isFetching global</p>
        <CurrentWeatherCard
          coords={UBICACION.USHUAIA}
          titulo="Clima de Ushuaia"
        />
        <CurrentWeatherCard
          coords={UBICACION.USHUAIA}
          titulo="Clima de Ushuaia"
        />
        <Divider className="my-4" />
        <p>Con params (misma key)</p>
        <CurrentWeatherCard
          coords={UBICACION.CABA}
          titulo="Clima de Capital Federal"
        />
        <Divider className="my-4" />
        <p>Zustand (key diferente)</p>
        <CurrentWeatherCardZustand
          coords={UBICACION.NEUQUEN}
          titulo="Clima de Neuquen"
        />
        <Divider className="my-4" />
        <CurrentWeatherCardZustand
          coords={UBICACION.MISIONES}
          titulo="Clima de Misiones"
        />
      </div>
    </main>
  );
};

export default App;
