//css

//library
import { useNavigate } from 'react-router-dom';

//component
import ReserveForm from  './ReserveForm';

function Reserve({form, onChange , occasions ,availableTimes ,handleSubmit, onClick}) {

    const nav = useNavigate();

    const handlerChange = (e) => {
        onChange(e)
    }

    const handlerSubmit = (e) => {
        // ~ use it to push handleSubmit up to parent component
        handleSubmit(e);

        e.preventDefault();
        nav("/confirmed",{ replace: true })
    }

    const fetchData = (e)=> {
        onClick(e)
    }


    return (
    <div>

    <ReserveForm form={form}
                    onChange={handlerChange}
                    occasions={occasions}
                    availableTimes={availableTimes}
                    handlerSubmit={handlerSubmit}
                    onClick={fetchData}/>

    </div>);

}

export default Reserve;

//form format
//date
//time - selector
//num of guests
//occasion - selector (birthday? anniversary?)
//submit
