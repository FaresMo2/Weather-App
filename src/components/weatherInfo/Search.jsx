import { useWeather } from "../../context/WeatherContext";

function Search() {
  const { quarry, setQuarry } = useWeather();

  return (
    <input
      className="h-10 px-4 text-base text-white border-none outline-none text-s bg-slate-500 w-60 rounded-xl"
      type="search"
      value={quarry}
      placeholder="Search..."
      onChange={(e) => setQuarry(e.target.value)}
    />
  );
}

export default Search;
