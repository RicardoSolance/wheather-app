import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudMoon,faTemperatureLow,faDropletDegree,faDroplet,thin, faLocationDot} from '@fortawesome/free-solid-svg-icons'

import { weatherContext } from '../../../context/weatherContext';

function CityWeather() {
  const {cityData} = useContext(weatherContext)
  const [bgImage, setbgImage]= useState('Madrid')
  const [cloudData, setCloudData] = useState() 
  const [tempData, setTempData] = useState() 
  const [humiData, setHumiData] = useState() 
  // console.log('esto es cityData', cityData);
  
  const clientID ='AIzaSyAKjassZzLbhSA6qk7gefNmqiJ2CjZigRg'
 const random  = () =>{
    return Math.random().toFixed(1) * 20;
  } 
  const renderCloudData = () => {

    if (cloudData !== 'sin datos' ) {
      console.log('cloud data en el if ',cloudData);
      return <p className='text-white fs-6 text-wrap'>{cloudData}</p>
    } else {
      return <p className='text-white fs-6 text-wrap'>buscando</p>
    }
  }
  const renderTempData = () => {
 
    if (tempData !== 'sin datos' ) {
      return <p className='text-white fs-6 text-wrap'>{tempData}</p>
    } else {
      return <p className='text-white fs-6 text-wrap'>buscando</p>
    }
  }
  const renderHumiData = () => {

    if (tempData !== 'sin datos' ) {
      return <p className='text-white fs-6'>{humiData} g/m³</p>
    } else {
      return <p className='text-white fs-6'>buscando</p>
    }
  }

  useEffect(()=>{
    async function getImage(){
      try {
        setTempData(cityData.main.temp)
        setCloudData(cityData.weather[0].description)
        setHumiData(cityData.main.humidity)
        const res = await axios.get(`https://api.unsplash.com/search/photos?query=${cityData.name}&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`)
        const cityImage = res.data.results[random()].urls.full
        {if (cityImage !== 'undefined')(setbgImage(res.data.results[random()].urls.full))}  
        // setbgImage(res.data.results[random()].urls.full)
      } catch (error) {
        console.log(error)
      }
    }
    getImage()
  },[cityData])
  return (
    // style={{backgroundImage: `url(${bgImage})`}}
    <section className='container ' >
        <div className='row text-center title'>
          <h1 className='text-white'>{cityData.name}</h1>
        </div>
        <div className='row data'>
          <div className='col-6 col-sm-4'>
            <h6 className='text-white'>clouds</h6>
            <h2 className=' icon'><FontAwesomeIcon icon={faCloudMoon} color='white' thin/></h2>
            {renderCloudData()}
          </div>
          <div className='col-6 col-sm-4'>
            <h6 className='text-white'>temperature</h6>
            <h2 className='icon'><FontAwesomeIcon icon={faTemperatureLow} color='white' thin /></h2>
            {renderTempData}
          </div>
          <div className='col-12 col-sm-4'>
          <h6 className='text-white'>humidity</h6>
            <h2 className='icon'><FontAwesomeIcon icon={faDroplet} color='white' thin /></h2>
            {renderHumiData}
          </div>
        </div>
    

    </section>
  )
}

export default CityWeather