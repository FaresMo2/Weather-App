import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [quarry, setQuarry] = useState("");
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [position, setPosition] = useState(null);

  const temp = weather?.current?.temp_c;
  const weatherStatus = weather?.current?.condition.text;
  const weatherStatusIcon = weather?.current?.condition.icon;
  const location = `${weather?.location?.country} , ${weather?.location?.name}`;
  const date = weather?.forecast?.forecastday[0].date;

  // Get The Current Address
  function getPosition() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  async function fetchAddress() {
    const positionObj = await getPosition();
    console.log(positionObj);
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    return position;
  }

  useEffect(function () {
    async function getAddress() {
      const po = await fetchAddress();
      console.log(po);
      setPosition(po);
    }
  });

  fetchAddress();

  // Fetching Weather Temp in specific Country
  useEffect(
    function () {
      const controller = new AbortController();
      async function getWeather() {
        try {
          setIsloading(true);
          setError("");
          const res = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=342643613ca143dbaee55738241107&q=${quarry}&days=7`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something Went Wrong With Fetching Movies");

          const data = await res.json();

          setWeather(data);
        } catch (err) {
          setError("No matching location found.");
        } finally {
          setIsloading(false);
        }
      }

      if (quarry.length < 3) {
        setError("");
        setWeather(null);
        return;
      }

      getWeather();

      return function () {
        controller.abort();
      };
    },
    [quarry]
  );
  return (
    <WeatherContext.Provider
      value={{
        quarry,
        setQuarry,
        weather,
        setWeather,
        isLoading,
        temp,
        weatherStatus,
        location,
        weatherStatusIcon,
        date,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContext);

  if (context === undefined)
    throw new Error("WeatherContext was used out of the WeatherProvider");

  return context;
}

export { WeatherProvider, useWeather };
