//stlying
import styles from './Highlight.module.css';

//assets
import greekSalad from '../assets/greek salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import lemonDessert from '../assets/lemon dessert.jpg';
import pasta from '../assets/pasta.jpg'
import pizza from '../assets/pizza.jpg'
import tiramisu from '../assets/tiramisu.jpg'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'

//library
import { useNavigate } from 'react-router-dom';

function Highlight () {

    //icons
    const bike = <FontAwesomeIcon icon={faMotorcycle} shake />

    //navigation
    const nav = useNavigate();
    const dishes = [
    {
        name:"Greek Salad",
        price: "$5.99",
        desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary cruotons",
        pic: greekSalad,
    },

    {
        name:"Bruschetta",
        price: "$12.99",
        desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        pic:bruschetta,
    },

    {
        name:"Lemon Dessert",
        price: "$5.00",
        desc: "This comes from grandma's recipe book, every last ingredient has been sourced as is authentic as can be imagined.",
        pic:lemonDessert,
    },

    {
        name:"Pasta",
        price: "$15.00",
        desc: "andmade with love, and served al dente (as pasta should be), this dish is severed with pork ragu bianco and generously coated with a silky sauce that will leave you wanting more.",
        pic:pasta,
    },

    {
        name:"Pizza",
        price: "$21.00",
        desc: "As a delectable reminder to get your basics right, the Margherita Pizza (S$19) does their huge wood fire oven justice with a smoky, crisp crust and a chewy dough. The tomato and cheese sits well on a thin base, presenting savoury and tangy tastes. Also, the basil leaf is baked into the pizza, covering its bitterness so non-basil fans have nary to worry about. ",
        pic:pizza,
    },

    {
        name:"Tiramisu",
        price: "$9.99",
        desc: "Layers of creamy mascarpone and sponge are textured with a house-made dark chocolate crumb here. You also get a dropper with rum so you can tailor the amount of booze that goes into your dessert.",
        pic:tiramisu,
    },

    ]


    return(
    <div className={styles.Highlight}>

        <div label="2 columns container for header" className={styles.container}>
            <div className={styles.header }>This weeks specials! </div>
            <div className={styles.boxButton }>
                <button className={styles.button} onClick={()=> nav("/menu")}>Online Menu</button>
            </div>
        </div>

        <div label="testing" className={styles.containerX}>
            <div label ="left container kept empty"></div>

                <div>
                <div label="3 columns container" className={styles.container2}>
                { dishes.map((item,index)=>(
                    <div key = {index} label = "three columns" className={styles.boxImg}>
                        <img src={item.pic} className={styles.img}/>
                        <div label = "subcontainer" className={styles.boxSub}>
                            <h4> {item.name}</h4>
                            <h4 className={styles.boxSub_h4}>{item.price}</h4>
                        </div>
                        <p className={styles.desc_p}> {item.desc}
                        </p>
                            <h4 className={styles.desc_h4} >Order a delivery {bike}</h4>
                    </div>
                ))}
            </div>
                </div>

            <div label ="right container kept empty"></div>
        </div>

    </div>

    );
}

export default Highlight;