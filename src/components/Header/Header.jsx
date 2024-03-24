import React from "react";
import PropTypes from "prop-types";

const Header = ({ cityName, cityWeatherInfo }) => {
  const { weather } = cityWeatherInfo;
  const weatherDescription = weather?.[0]?.description.toUpperCase() || "";
  const icon = weather?.[0]?.icon || "";

  return (
    <div className="header mt-5 d-flex justify-content-center align-items-center flex-column">
      {cityName && (
        <div className="text-center">
          <h1 className="display-1">{cityName.toUpperCase()}</h1>
          <p className="description display-4 h6 m-0">{weatherDescription}</p>
        </div>
      )}
      {icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" className="weather-icon" />}
    </div>
  );
};

Header.propTypes = {
  cityName: PropTypes.string,
  cityWeatherInfo: PropTypes.shape({
    weather: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Header;
