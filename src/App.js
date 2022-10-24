import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import React,{ useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss'
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
