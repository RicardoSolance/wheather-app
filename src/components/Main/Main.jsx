import React, { useContext } from "react";
import { weatherContext } from "../../context/weatherContext";
import GetCity from "./GetCity/GetCity";
import useCurrentCity from "../../hooks/useCurrentCity";
import CityWeather from "./CityWeather/CityWeather";
import Header from "../Header/Header";

function Main() {
  const { cityName, cityWeatherInfo } = useContext(weatherContext);
  useCurrentCity();
  return (
    <div className="main d-flex flex-column justify-content-center align-items-center ">
      <Header cityName={cityName} cityWeatherInfo={cityWeatherInfo} />
      <CityWeather cityWeatherInfo={cityWeatherInfo} />
      <GetCity />
    </div>
  );
}

export default Main;
