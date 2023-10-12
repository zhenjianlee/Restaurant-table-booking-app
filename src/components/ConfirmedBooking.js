import styles from './ConfirmedBooking.module.css'

import {useNavigate} from "react-router-dom"

function ConfirmedBooking({form,setForm}) {


    const nav= useNavigate();

    return (
        <div className= {styles.confirmed}>

            <h1 className={styles.header}>Booking Confirmation</h1>

            <div className={styles.message}>

                <h2> Thank you {form.name}, your booking has been confirmed. Here are the details!</h2>
                <h4 htmlFor="date">Reservation Date</h4>
                            <p> {form.date}</p>

                        <h4 htmlFor="time">Reservation Time</h4>
                            <p> {form.time}</p>

                        <h4 htmlFor="guests">Guests</h4>
                            <p> {form.guests}</p>

                        <h4 htmlFor="occasion">Occasion</h4>
                            <p> {form.occasion}</p>

                        <h4 htmlFor="mobile">Your Mobile</h4>
                            <p> {form.mobile}</p>
                        <button onClick={()=> {nav("/")}}
                                    >Back to Home</button>

            </div>



        </div>
    );



}

export default ConfirmedBooking;