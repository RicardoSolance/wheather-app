import React from 'react';
import CityWeather from './CityWeather/CityWeather';
import GetCity from './GetCity/GetCity';

function Main(props) {
  return (
    <main className='container-fluid w-100 w-sm-50'>
      <div mb-6 mt-6> 
        <h4 className='text-white'>City Weather App</h4>
      </div>
      <GetCity/>
      <CityWeather/>
    </main>
  );
}

export default Main;