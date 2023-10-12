import styles from './ReserveForm.module.css'

function ReserveForm( {form, onChange , occasions ,availableTimes ,handlerSubmit,onClick}) {

    const handlerChange = (e) => {
        onChange(e)
    }

    const fetchData = (e)=> {
        onClick(e)
    }

    return (
    <div>

        <h1 className={styles.header}>Table Reservation</h1>

        <div className={styles.container}>

            <div name="empty space" />


            <form className={styles.form} >
                    <label htmlFor="date">Reservation Date (YYYY-MM-DD)</label>
                        <input name="date"
                                id="date"
                                type ="text"
                                value ={form.date}
                                onChange={handlerChange}
                                placeholder="YYYY-MM-DD"
                                required
                                minLength={10}/>

                    <label htmlFor="time">Reservation Time</label>
                        <select name ="time" id="time" value={form.time} onChange={handlerChange} onClick={fetchData}>
                            {availableTimes.length>0 && availableTimes[availableTimes.length-1] !== undefined?
                                        availableTimes.map( (item,index)=>
                                            (<option key={index} value={item}>{item}</option>)
                                            ):null}
                        </select>


                    <label htmlFor="guests">Guests</label>
                        <input name="guests"
                                id="guests"
                                type = "number"
                                value ={form.guests}
                                onChange={handlerChange}
                                placeholder="2 pax?"
                                min="1"
                                max="10"
                                required
                                minLength={1}/>

                    <label htmlFor="occasion">Occasion</label>
                        <select name ="occasion" id="occasion" value={form.occasion} onChange={handlerChange}>
                        {occasions? occasions.map((item,index)=>(
                            <option key={index} value={item}>{item}</option>
                        )
                        ):null}
                        </select>

                    <label htmlFor="name">Name</label>
                        <input name="name"
                                id="name"
                                type ="text"
                                value ={form.name}
                                onChange={handlerChange}
                                placeholder="Name"
                                required
                                minLength={5}/>

                    <label htmlFor="mobile">Mobile Number</label>
                        <input name="mobile"
                                id="mobile"
                                type ="number"
                                value ={form.mobile}
                                onChange={handlerChange}
                                placeholder="+65 6688 5665 "
                                required
                                minLength={8}/>

                    <button onClick={handlerSubmit}
                                disabled={form.date === "" ||
                                            form.date.length< 10||
                                            form.guests === "" ||
                                            form.guests <= 0 ||
                                            form.time === "" ||
                                            form.occasion ==="" ||
                                            form.name ==="" ||
                                            form.name.length <=5 ||
                                            form.mobile ===""||
                                            form.mobile.length <=7}
                                >Submit Reservation</button>

            </form>

            <div name="empty space" />
        </div>


    </div>);

}

export default ReserveForm;


/*

<select name ="time" value={form.time} onChange={handlerForm}>

*/


//form format
//date
//time - selector
//num of guests
//occasion - selector (birthday? anniversary?)
//submit


// <form style="display: grid; max-width: 200px; gap: 20px">
//    <label for="res-date">Choose date</label>
//    <input type="date" id="res-date">
//    <label for="res-time">Choose time</label>
//    <select id="res-time ">
//       <option>17:00</option>
//       <option>18:00</option>
//       <option>19:00</option>
//       <option>20:00</option>
//       <option>21:00</option>
//       <option>22:00</option>
//    </select>
//    <label for="guests">Number of guests</label>
//    <input type="number" placeholder="1" min="1" max="10" id="guests">
//    <label for="occasion">Occasion</label>
//    <select id="occasion">
//       <option>Birthday</option>
//       <option>Anniversary</option>
//    </select>
//    <input type="submit" value="Make Your reservation">
// </form>