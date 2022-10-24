import React, { useContext, useState } from "react";
import { weatherContext } from "../../../context/weatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

function GetCity() {
  const { setCityName, setCityWeatherInfo } = useContext(weatherContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    await fetchCityWeather(city);
    e.target.reset();
  };

  const fetchCityWeather = async (city) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=es`
      );
      await setCityWeatherInfo(data);
      await setCityName(data.name);
    } catch (error) {
      const notFound = error.response.data.message;
      console.error("Error fetching city weather:", notFound);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 d-flex justify-content-center align-items-center text-black">
      <div className="form-group d-flex justify-content-center align-items-center">
        <input className="form-control m-1 border-white shadow-none" id="cityInput" name="city" placeholder="Enter city name" type="text" />
        <button type="submit" className="btn btn-primary px-3 py-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </form>
  );
}

export default GetCity;
