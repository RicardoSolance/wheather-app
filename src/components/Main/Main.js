import React from 'react';
import CityWeather from './CityWeather/CityWeather';
import GetCity from './GetCity/GetCity';

function Main(props) {
  return (
    <main className='container'>
      <GetCity/>
      <CityWeather/>
    </main>
  );
}

export default Main;