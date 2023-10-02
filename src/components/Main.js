// css
import './Main.css';

// assets
import logo from '../assets/Logo.svg'

//components
import About from './About';
import Hero from './Hero';
import Highlight from './Highlight';
import Menu from './Menu';
import Reserve from './Reserve';
import Testimonials from './Testimonials';


// library
import {BrowserRouter, Routes, Route , NavLink}  from "react-router-dom";
import {useState ,useReducer} from "react";

// Error
function FourOhfour(){
  return (
    <>
      <h1>Error 404!</h1>
    </>
  );
}

// Main
function Main() {

  const [form, setForm] = useState(
    {
        date: "",
        guests: 2,
        time:"",
        occasion: "",
    })

    const handlerChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ... form ,
            [name]: value,})
        dispatch({type:"availableTimes", payload: e.target.value.date})
    };

    const occasions = ["Birthday", "Anniversary", "Proposal",];
    // const availableTimes= ["17:00","18:00","19:00","20:00","21:00",];

    const initializeTimes= ["17:00","18:00","19:00","20:00","21:00",];

    function updateTimes(availableTimes,action){
        switch(action.type){
            case 'availableTimes':
                return availableTimes=["19:00","20:00","21:00",]
        }
    }
    const [availableTimes, dispatch] = useReducer (updateTimes,initializeTimes)

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
            <Route path = "/reserve" element = {
                  <Reserve form={form}
                    onChange={handlerChange}
                    occasions={occasions}
                    availableTimes={availableTimes}/>} />
            <Route path = "*" element = {<FourOhfour/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Main;
