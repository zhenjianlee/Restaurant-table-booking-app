import styles from './Hero.module.css';
import heropic from '../assets/restauranfood.jpg'

//library
import { useNavigate } from 'react-router-dom';


function Hero() {

    const nav = useNavigate();

    return (
    <div className = {styles.Hero}>

        <div className={styles.container}>

            <div className={styles.boxMessage}>

                <h1 className ={styles.header}>Little Lemon</h1>
                <h2 className ={styles.subheader}>Chicago</h2>
                <p className={styles.p}>
                We are a family owned <br/>
                Mediterranian restaurant,<br/>
                focused on traditional recipes<br/>
                served with a modern  <br/>
                twist.
                </p>
                <button className={styles.button} onClick ={()=> nav("/reserve")}>Reserve a Table</button>

            </div>

            <div className={styles.boxImg}>
            <img src={heropic} className={styles.img}/>
            </div>

        </div>



    </div>);
}
export default Hero;