import React from "react";
import PropTypes from "prop-types";

const CityWeather = ({ cityWeatherInfo }) => {
  const { humidity, temp, temp_max, temp_min, feels_like, pressure } = cityWeatherInfo?.main || {};

  return (
    <div className="cityWeather container  d-flex justify-content-center align-items-center px-4">
      {cityWeatherInfo && (
        <div className="container-data d-flex w-75 justify-content-between align-items-center flex-wrap">
          <div className="humidity-container h-100 w-50 d-inline-block text-left  w-50 flex-column text-white d-flex justify-content-center">
            <h2 className="details-title mx-2">DETAILS</h2>
            <div className="details-text mx-2 d-flex justify-content-between w-75">
              <span>MAX/MIN</span>
              <span>
                {Math.round(temp_max)}/{Math.round(temp_min)}
              </span>
            </div>
            <div className="details-text mx-2 d-flex justify-content-between w-75">
              <span>SENSACIÓN</span>
              <span>{feels_like}</span>
            </div>
            <div className="details-text mx-2 d-flex justify-content-between w-75">
              <span>HUMEDAD</span>
              <span>{humidity}%</span>
            </div>
            <div className="details-text mx-2 d-flex justify-content-between w-75">
              <span>PRESION</span>
              <span>N {pressure}</span>
            </div>
          </div>
          <div className="temperature-container w-50 text-white d-flex align-items-center justify-content-center">
            <h1 className="temperature display-1 m-0 px-4">{Math.round(temp)}°</h1>
          </div>
        </div>
      )}
    </div>
  );
};

CityWeather.propTypes = {
  cityWeatherInfo: PropTypes.shape({
    main: PropTypes.shape({
      humidity: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired,
    }),
  }),
};

export default CityWeather;
