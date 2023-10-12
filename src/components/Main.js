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
import ConfirmedBooking from './ConfirmedBooking';

//mockapi
import {fetchAPI,submitAPI} from '../api/mockAPI';


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

  //useReducer
  const initializeTimes= ["Input date and click to fetch times", "Standby as system fetches data"];
  // const initializeTimes= ["17:00","18:00","19:00","20:00","21:00",];


  const [availableTimes, dispatch] = useReducer (updateTimes,initializeTimes);

  //~useState
  const [form, setForm] = useState(
    {
        date: "",
        guests: 2,
        time:"",
        occasion: "",
        name:"",
        mobile:""
    });

    const handlerChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ... form ,
            [name]: value,})
    };

    // ~cannot use useNavigate in Main, it is outside the Router
    const handleSubmit = (e) => {
      console.log("hello, this still works!")
      submitData(form)
    };

    const submitData = async (form)=> {
      try {
        const response = await submitAPI(form);
      }
      catch (error){
        console.error("error fetching data",error)
      }
      finally{
        console.log("form submitted ==>" ,form)
      }

    }


    const fetchData = async ()=> {

      // ~need to use await because promises are asynchronous. refer notes below.
      try {
        const response = await fetchAPI(form.date);
        dispatch({type:"availableTimes", payload: response})
      }
      catch (error){
        console.error("error fetching data",error)
      }

      console.log("form ==>" ,form)
    }

    const occasions = ["Birthday", "Anniversary", "Proposal", "Dining"];
    // const availableTimes= ["17:00","18:00","19:00","20:00","21:00",];

    function updateTimes(availableTimes,action){
        switch(action.type){
            case 'availableTimes':
                console.log("payload===>",action.payload)
                return action.payload;
            default:
              return availableTimes;
        }
    }

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
                    availableTimes={availableTimes}
                    handleSubmit={handleSubmit}
                    onClick={fetchData}/>} />
            <Route path = "/confirmed" element ={<ConfirmedBooking form={form} setForm={setForm}/>}/>
            <Route path = "*" element = {<FourOhfour/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Main;


/*

Notes:-

When you're working with a Promise, you need to use the await keyword to wait for the 
Promise to resolve before you can access the resolved value. Without await, you 
won't be able to directly access the resolved value, and attempting to do so 
would result in a Promise object or a pending state.

Here's why await is important:

Promises are Asynchronous: Promises represent asynchronous operations. When you 
initiate an async operation and get a Promise in return, the operation is typically 
not complete at the moment the Promise is created. It's still in progress.

await Pauses Execution: The await keyword pauses the execution of your code until 
the Promise is resolved. It essentially "waits" for the Promise to complete and 
then continues with the execution.

In your code, you use await when fetching data using fetchAPI to ensure that the 
response contains the actual data (not a pending Promise). Without await, the 
response would be a Promise object, and you wouldn't be able to directly access 
the resolved data.

So, when working with Promises in an async function, always use await to access 
the resolved value or handle the Promise using .then() and .catch().

*/