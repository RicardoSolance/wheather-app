import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { weatherContext } from '../../../context/weatherContext'

function CityWeather() {
  const {cityData} = useContext(weatherContext)
 
  console.log('esto es cityData', cityData);
  const clientID ='AIzaSyAKjassZzLbhSA6qk7gefNmqiJ2CjZigRg'

  useEffect(()=>{
    async function getImage(){
      try {
        const res = await axios.get(`https://api.unsplash.com/search/photos?query=${cityData.name}&per_page=1&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`)
        console.log('image', res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getImage()
  })
  return (
    <section className='container cityWeather mt-2 rounded'>
      <div className='row'>
        <h1 className='text-white'>{cityData.name}</h1>
      </div>

    </section>
  )
}

export default CityWeather