import React, { FunctionComponent, useContext } from "react";
import UnitContext from "../../provider/unit-provider";
import useWeatherStore from "../../store/use-weather-store";
import "./current-weather.css";

const CurrentWeather: FunctionComponent = () => {
  const { convert } = useContext(UnitContext);
  const currentWeather = useWeatherStore((state) => state.currentWeather);
  const [weather] = currentWeather?.weather ?? [];
  return (
    <div className={"current-weather-card"}>
      <div>{weather?.main}</div>
      {currentWeather?.main ? (
        <React.Fragment>
          <div>{convert(currentWeather?.main.temp).toFixed(2)}</div>
          <div>{convert(currentWeather?.main.temp_min).toFixed(2)}</div>
          <div>{convert(currentWeather?.main.temp_max).toFixed(2)}</div>
        </React.Fragment>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CurrentWeather;
