import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import React,{ useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { weatherContext } from './context/weatherContext';
import './styles/styles.scss'
import axios from 'axios';


function App() {
  const [cityData, setCityData] = useState({});
  const [cityName, setCityName] = useState({});
  
  useEffect(()=>{
    async function fetchCity(){
      try {
        console.log('entra en el context',cityName);
        const apikey = "b2f45226fa11dc7c8bf03ea44973afe0"
        const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`);
        setCityData(res.data)
        console.log('city Data',cityData);
      } catch (error) {
        console.log(error);
      }
    }
    console.log('cliente', process.env.CLIENT_ID)
    fetchCity()
  },[cityName])
  const data = {
    cityName, 
    setCityName,
    cityData,
    setCityData
  };
  return (
    <div className="App">
      <weatherContext.Provider value={data}>
        <BrowserRouter>
          <Header/>
          <Main/>
          <Footer/>
        </BrowserRouter>
      </weatherContext.Provider>
    </div>
  );
}

export default App;
