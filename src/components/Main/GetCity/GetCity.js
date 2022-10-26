import React,{useContext} from 'react';
import { weatherContext } from '../../../context/weatherContext';

function GetCity() {
  const {cityName, setCityName} = useContext(weatherContext);
  const handleSubmit = (e) =>{
    e.preventDefault();
    const city = e.target.city.value
    console.log(city);
    setCityName(city);
    e.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group d-flex ">
        <input type="text" className='form-control m-1 transparent-input text-white' id="cityName" name='city' placeholder="Find city"/>
        <button type="submit" className="btn btn-light m-1">Find</button>
      </div>
    </form>
  );
}

export default GetCity;