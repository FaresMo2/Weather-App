import { useWeather } from "../../context/WeatherContext";

function Date() {
  const { date } = useWeather();
  return <div className="text-xl font-bold">{date}</div>;
}

export default Date;
