import { useWeather } from "../../context/WeatherContext";
import ForcastItem from "./ForcastItem";

function Forecast() {
  const { weather } = useWeather();
  return (
    <div className="flex items-center justify-between gap-3 mt-32 px-60 ">
      {weather?.forecast?.forecastday?.map((day) => (
        <ForcastItem day={day} key={day?.location?.localtime_epoch} />
      ))}
    </div>
  );
}

export default Forecast;
