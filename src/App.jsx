import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { weatherContext } from "./context/weatherContext";
import Main from "./components/Main/Main";
import "./styles/styles.scss";

function App() {
  const [cityWeatherInfo, setCityWeatherInfo] = useState({});
  const [cityName, setCityName] = useState();

  const state = {
    cityName,
    setCityName,
    cityWeatherInfo,
    setCityWeatherInfo,
  };

  return (
    <weatherContext.Provider value={state}>
      <div className="App">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </weatherContext.Provider>
  );
}

export default App;
