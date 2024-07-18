import { useWeather } from "../../context/WeatherContext";
import EmptyTemp from "./EmptyTemp";
import Forecast from "./Forecast";
import Header from "./Header";
import Temp from "./Temp";
import Loader from "../../ui/Loader";

function WeatherInfo() {
  const { quarry, isLoading, weather } = useWeather();
  return (
    <div className="w-3/4 h-full p-8 border-8  bg-wInfo border-br rounded-xl">
      <Header />
      {weather === null ? <EmptyTemp /> : isLoading ? <Loader /> : <Temp />}
      <Forecast />
    </div>
  );
}

export default WeatherInfo;
