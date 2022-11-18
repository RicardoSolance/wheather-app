import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import mills from '../../../assets/icons/mills.svg'
import pressure from '../../../assets/icons/pressure.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudMoon,faTemperatureLow,faDroplet,faCloud, faEye, faWind, faCompass, faReel, faBlind, faCompress} from '@fortawesome/free-solid-svg-icons'

import { weatherContext } from '../../../context/weatherContext';

function CityWeather() {
  const {cityData} = useContext(weatherContext)
  const [bgImage, setbgImage]= useState('Madrid')
  const [cloudData, setCloudData] = useState() 
  const [tempData, setTempData] = useState() 
  const [humiData, setHumiData] = useState() 
  const [cloudsData, setCloudsData] = useState() 
  const [visibilityData, setVisibilityData] = useState() 
  const [windData, setWindData] = useState() 
  // console.log('esto es cityData', cityData);
  
  const clientID ='AIzaSyAKjassZzLbhSA6qk7gefNmqiJ2CjZigRg'
 const random  = () =>{
    return Math.random().toFixed(1) * 20;
  } 
  const renderCloudData = () => {

    if (cloudData !== 'sin datos' ) {

      return <p className='text-white fs-6 text-wrap'>{cloudData}</p>
    } else {
      return <p className='text-white fs-6 text-wrap'>buscando</p>
    }
  }
  const renderTempData = () => {
 
    if (tempData !== 'sin datos' ) {
      const temperature = tempData
      return <h1 className='temp text-white text-wrap m-0'>{temperature}°</h1>
    } else {
      return <p className='text-white text-wrap m-0'>buscando</p>
    }
  }
  const rendervisibilityData = () => {

    if (visibilityData !== 'sin datos' ) {
      return <span className='text-white font-3 ms-1'>{visibilityData}km</span>
    } else {
      return <span className='text-white'>buscando</span>
    }
  }
  const rendercloudsData = () => {

    if (cloudsData !== 'sin datos' ) {
      return <span className='text-white  '>{cloudsData}%</span>
    } else {
      return <span className='text-white'>buscando</span>
    }
  }
  const renderHumiData = () => {

    if (tempData !== 'sin datos' ) {
      return <span className='text-white font-3 '>{humiData}%</span>
    } else {
      return <span className='text-white'>buscando</span>
    }
  }
  const renderWindData = () => {

    if (windData !== 'sin datos' ) {
      return <span className='text-white font-3 '>{windData} Km/h</span>
    } else {
      return <span className='text-white'>buscando</span>
    }
  }

  useEffect(()=>{
    async function getImage(){
      try {
        setTempData(cityData.main.temp.toFixed())
        setCloudData(cityData.weather[0].description)
        setHumiData(cityData.main.humidity)
        setVisibilityData(cityData.visibility)
        setCloudsData(cityData.clouds.all)
        setWindData(cityData.wind.speed)
        const res = await axios.get(`https://api.unsplash.com/search/photos?query=${cityData.name}&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`)
        const cityImage = res.data.results[random()].urls.full
        // eslint-disable-next-line no-lone-blocks
        {if (cityImage !== 'undefined')(setbgImage(res.data.results[random()].urls.full))}  
        
      } catch (error) {
        console.log(error)
      }
    }
    getImage()
  },[cityData])
  return (
    // style={{backgroundImage: `url(${bgImage})`}}
    <section className=' d-flex flex-column justify-content-between align-items-center w-100 w-sm-50 m-2 cityWeather' >
        <div className='row text-center title'>
          <h2 className='text-white'>{cityData.name}</h2>
          {renderTempData()}
          {renderCloudData()}
        </div>
        <div className='row data d-flex justify-content-center flex-row '>
          <div className='row data-1 rounded d-flex justify-content-beetwen align-items-center p-2 mb-2' >

            <div className='col-4 d-inline-flex  justify-content-center align-items-center border-end text-wrap '>
              <FontAwesomeIcon icon={faDroplet} color='#0aadfe' thin  className='me-2 ms-2'/>
              <div className='data-display text-start d-flex justify-content-start flex-column text-wrap '>
                <p className='text-white font-2 me-3 mb-0 text-wrap'>Humidity</p>
                {renderHumiData()} 
              </div>
            </div>

            <div className='col-4 d-inline-flex  justify-content-center align-items-center border-end text-wrap'>
              <FontAwesomeIcon icon={faCloud} color='white' thin  className='me-2'/>
              <div className='data-display text-start d-flex justify-content-start flex-column text-wrap'>
                <p className='text-white font-2 m-0 text-wrap'>Cloud</p>
                { rendercloudsData()}
              </div>
            </div>
            <div className='col-4 d-inline-flex  justify-content-center align-items-center text-wrap'>
              <FontAwesomeIcon icon={faEye} color='white' thin  className='ms-1'/>
              <div className='data-display text-start d-flex justify-content-center flex-column text-wrap'>
                <p className='text-white font-2 ms-1 mb-0  text-wrap'>visibility</p>
                {rendervisibilityData()}
              </div>
            </div>

           
 
          </div>
          <div className='row data-2 rounded d-flex justify-content-beetwen align-items-center p-2 mb-2'>
              <div className='col-7 d-inline-flex  justify-content-center align-items-center border-end text-wrap'>
                <img src={mills} className='me-2 iconSvg'/>
                <div className='data-display text-start d-flex justify-content-center flex-column ms-3 text-wrap'>
                  <p className='text-white font-2 m-0 text-wrap'>Wind</p>
                  {renderWindData()} 
              </div>
              {/* <span className='text-white font-2 m-0 text-wrap'><FontAwesomeIcon icon={faCompass} color='#0aadfe'   className='ms-3 me-2'/>{cityData.wind.deg}°</span>  */}
              </div>
              <div className='col-5 d-inline-flex  justify-content-center align-items-center text-wrap  py-2'>
                <img src={pressure} className='ms-2 iconSvg-2'/>
                <div className='data-display text-start d-flex justify-content-center flex-column ms-2 text-wrap'>
                  <p className='text-white font-2 m-0 text-wrap'>Pressure</p>
                  {renderWindData()} 
                </div>
              
              </div>
          </div>
         
        </div>
    </section>
  )
}

export default CityWeather