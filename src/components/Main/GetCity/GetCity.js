import React,{useState, useEffect, useContext} from 'react';
import { weatherContext } from '../../../context/weatherContext';
import { Form } from 'react-router-dom';


function GetCity() {
  const [cityName, setCityName] = useContext(weatherContext);
  const handleSubmit = (e) =>{
    e.preventDefault();
    const city = e.target.city.value
    console.log(city);
    setCityName(city);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group d-flex ">
        <input type="text" className='form-control m-1 transparent-input text-white' id="cityName" name='city' placeholder="Find city"/>
        <button type="submit" className="btn btn-primary m-1">Find</button>
      </div>
    </form>
  );
}

export default GetCity;