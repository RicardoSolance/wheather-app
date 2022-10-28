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
    <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center mt-3'>
      <div className="form-group ">
        <input type="text,submit" className='form-control m-1 border-white transparent-input text-white shadow-none fs-' id="cityName" name='city' placeholder="Find city"/>
        {/* <button type="submit" className="btn btn-light m-1">Find</button> */}
      </div>
    </form>
  );
}

export default GetCity;