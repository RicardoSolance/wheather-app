import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { weatherContext } from '../../../context/weatherContext'

function CityWeather() {
  const {cityData} = useContext(weatherContext)
  const [bgImage, setbgImage]= useState('Madrid')
 
  console.log('esto es cityData', cityData);
  const clientID ='AIzaSyAKjassZzLbhSA6qk7gefNmqiJ2CjZigRg'
 const random  = () =>{
    return Math.random().toFixed(1) * 20;
} 

  useEffect(()=>{
    async function getImage(){
      try {
        const res = await axios.get(`https://api.unsplash.com/search/photos?query=${cityData.name}&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`)
        setbgImage(res.data.results[random()].urls.full)
      } catch (error) {
        console.log(error)
      }
    }
    getImage()
  },[cityData])
  return (
    <section className='container cityWeather mt-2 rounded' style={{backgroundImage: `url(${bgImage})`}}>
      <div className='row'>
        <h1 className='text-white'>{cityData.name}</h1>
      </div>

    </section>
  )
}

export default CityWeather