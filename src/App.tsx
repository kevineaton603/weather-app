import React, { useEffect } from "react";
import "./App.css";
import useGeoLocation from "./hooks/use-geolocation";
import useWeatherStore from "./store/use-weather-store";
import { UnitProvider } from "./provider/unit-provider";
import CurrentWeather from "./components/current-weather";
import UnitSwitchButton from "./components/UnitSwitchButton";
import FiveDayForecast from "./components/five-day-forecast";
import Layout from "./components/layout";

const App = () => {
  const { position } = useGeoLocation({});
  const fetchCurrentWeather = useWeatherStore(
    (state) => state.fetchCurrentWeather
  );
  const fetchFiveDayForecast = useWeatherStore(
    (state) => state.fetchFiveDayForecast
  );

  useEffect(() => {
    if (position !== undefined) {
      fetchCurrentWeather(position);
      fetchFiveDayForecast(position);
    }
  }, [fetchCurrentWeather, fetchFiveDayForecast, position]);

  const Header = () => {
    return (
      <React.Fragment>
        <h1 style={{ flexGrow: 1 }}>Weather App</h1>
        <UnitSwitchButton />
      </React.Fragment>
    );
  };

  return (
    <UnitProvider>
      <Layout header={<Header />}>
        <div className="App">
          <CurrentWeather />
          <FiveDayForecast />
        </div>
      </Layout>
    </UnitProvider>
  );
};

export default App;
