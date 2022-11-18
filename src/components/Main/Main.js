import React from 'react';
import CityWeather from './CityWeather/CityWeather';
import CurrenPosition from './CurrenPosition/CurrenPosition';
import GetCity from './GetCity/GetCity';

function Main(props) {
  return (
    <main className='d-flex flex-column justify-content-center align-items-center '>
      <div className='mb-6 mt-6'> 
        <h4 className='text-white'>City Weather App</h4>
      </div>
      <GetCity/>
      <CityWeather/>
      <CurrenPosition/>
    </main>
  );
}

export default Main;