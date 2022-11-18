import React,{useContext} from 'react'
import axios from 'axios';
import { weatherContext } from '../../../context/weatherContext';

function CurrenPosition() {
  const {cityData, setCityData} = useContext(weatherContext);
  const handleSubmit = (e) =>{
    e.preventDefault();
    try {
      const apikey = "b2f45226fa11dc7c8bf03ea44973afe0"
      if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(async(position) => {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
          const req = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}&units=metric&lang=es`);
          const data =req.data;
          setCityData(req.data);

          console.log('mi localizacion', data);

      });
      
        console.log('navegador',navigator.permissions)
        
      }
     
    } catch (error) {
      
    }
  }

  return (
    <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center mt-3'>
      <div className="form-group ">
       
        <button type="submit" className="btn btn-light m-1 text-primary">my position</button>
      </div>
    </form>
  )
}

export default CurrenPosition