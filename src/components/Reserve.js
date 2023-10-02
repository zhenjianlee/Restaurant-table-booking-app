//css

//libary

//component
import ReserveForm from  './ReserveForm';

function Reserve({form, onChange , occasions ,availableTimes}) {

    const handlerChange = (e) => {
        onChange(e)
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
    }


    return (
    <div>

    <ReserveForm form={form}
                    onChange={handlerChange}
                    occasions={occasions}
                    availableTimes={availableTimes}
                    handlerSubmit={handlerSubmit}/>

    </div>);

}

export default Reserve;

//form format
//date
//time - selector
//num of guests
//occasion - selector (birthday? anniversary?)
//submit
