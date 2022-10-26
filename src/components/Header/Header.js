import React, { Component } from "react";
import logo  from '../../assets/imges/weather.png'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-light ">
        <a className="navbar-brand " href="/">
          <img src={logo} width="30" height="30" alt="" loading="lazy"/>
        </a>
      </nav>
    </header>
  )
}
export default Header
