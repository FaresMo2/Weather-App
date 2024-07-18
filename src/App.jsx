import WeatherInfo from "./components/weatherInfo/WeatherInfo";
import WeatherMap from "./components/weatherMap/WeatherMap";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="flex w-full h-screen gap-4 bg-appC p-9">
      <WeatherProvider>
        <WeatherInfo />
        <WeatherMap />
      </WeatherProvider>
    </div>
  );
}

export default App;
