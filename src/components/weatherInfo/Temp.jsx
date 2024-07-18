import { LiaWindSolid } from "react-icons/lia";
import { RiTempColdLine } from "react-icons/ri";
import { useWeather } from "../../context/WeatherContext";

function Temp() {
  const { temp, weatherStatus, location, weatherStatusIcon, error } =
    useWeather();

  if (error)
    return (
      <p className="flex flex-wrap items-center justify-center mt-64 text-6xl text-tx">
        {error}
      </p>
    );

  return (
    <div className="relative flex flex-wrap items-center justify-center mt-18">
      <div className="flex items-center justify-between gap-8">
        <div className="relative font-bold text-sz text-tx">
          {temp} <span className="absolute text-9xl top-20">o</span>
        </div>
        <div className="mt-16 text-2xl">
          <div className="flex items-center gap-3 mb-2">
            <LiaWindSolid /> 6.1 mph
          </div>
          <div className="flex items-center gap-3">
            <RiTempColdLine /> 90 %
          </div>
        </div>
      </div>
      <p className="w-full -mt-10 -ml-16 text-5xl text-center uppercase text-tx">
        {weatherStatus}
        {"  "}
        <img className="inline-block -mt-3" src={weatherStatusIcon} />
      </p>

      <p className="absolute w-full -mt-12 -ml-16 text-3xl text-center text-gray-400 uppercase -bottom-16 left-8">
        {location}
      </p>
    </div>
  );
}

export default Temp;
