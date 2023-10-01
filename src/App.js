// css
import './App.css';

// assets
import logo from './assets/Logo.svg'

//components
import About from './components/About';
import Home from './components/Home';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import Menu from './components/Menu';
import Reserve from './components/Reserve';
import Testimonials from './components/Testimonials';


// library
import {BrowserRouter, Routes, Route , Link, NavLink}  from "react-router-dom";
import {useState} from "react";

// Error
function FourOhfour(){
  return (
    <>
      <h1>Error 404!</h1>
    </>
  );
}

// App
function App() {

  // -----------------------------------------------
  return (
    <>
    <div >
        <BrowserRouter>
        <nav className = "Navbar">
          <img src={logo} alt="Logo" className = "Logo"/>
          <NavLink to= "/" className= "Link"> Highlight</NavLink>
          <NavLink to= "/testimonials" className= "Link"> Testimonials</NavLink>
          <NavLink to= "/about" className= "Link"> About</NavLink>
          <NavLink to= "/menu" className= "Link"> Menu</NavLink>
          <NavLink to= "/reserve" className= "Link"> Reservation</NavLink>
        </nav>
        <Hero/>
          <Routes>
            <Route index element = {<Highlight/>} />
            <Route path = "/testimonials" element = {<Testimonials/>} />
            <Route path = "/about" element = {<About/>} />
            <Route path = "/menu" element = {<Menu/>} />
            <Route path = "/reserve" element = {<Reserve/>} />
            <Route path = "*" element = {<FourOhfour/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
