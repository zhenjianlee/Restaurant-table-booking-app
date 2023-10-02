import styles from './ReserveForm.module.css'

function ReserveForm( {form, onChange , occasions ,availableTimes ,handlerSubmit}) {

    const handlerChange = (e) => {
        onChange(e)
    }

    return (
    <div>

        <h1 className={styles.header}>Table Reservation</h1>

        <div className={styles.container}>

            <empty space left />


            <form className={styles.form} >
                    <label>Date</label>
                        <input name="date"
                            type ="text"
                            value ={form.date}
                            onChange={handlerChange}
                            placeholder="DD/MM/YY"/>

                    <label>Reservation Time</label>
                        <select name ="availableTimes" value={form.availableTimes} onChange={handlerChange}>
                            {availableTimes.map( (item,index)=>
                            (<option key={index} value={form.item}>{item}</option>)
                            )}
                        </select>

                    <label>Number of Guests</label>
                        <input name="guests"
                                type = "number"
                                value ={form.guests}
                                onChange={handlerChange}
                                placeholder="2 pax?"
                                min="0"
                                max="10"/>

                    <label>Occasion</label>
                        <select name ="occasion" value={form.occasion} onChange={handlerChange}>
                        {occasions.map((item,index)=>(
                            <option key={index} value={item}>{item}</option>
                        )
                        )}
                        </select>

                    <button onClick={handlerSubmit}>Submit Reservation</button>

            </form>

            <empty space right />
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