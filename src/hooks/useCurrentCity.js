import { useEffect, useState, useContext } from "react";
import { weatherContext } from "../context/weatherContext";
import axios from "axios";

function useCurrentCity() {
  const [city, setCity] = useState("");
  const { setCityName, setCityWeatherInfo } = useContext(weatherContext);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            const { data } = await axios(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=es`
            );
            await setCityWeatherInfo(data);
            await setCity(data.name);
            await setCityName(city);
          });
        }
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
    };

    fetchCityData();

    return () => {};
  }, [city]);

  return city;
}

export default useCurrentCity;
