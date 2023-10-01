import marioAdrian1 from '../assets/marioAdrianA.jpg';
import marioAdrian2 from '../assets/marioAdrianB.jpg';

import styles from './About.module.css'


function About () {

    return(
    <div>
        <h1 className={styles.header}>About</h1>

        <div className={styles.container}>

            <div className={styles.boxMessage}>
                <h3>Adrian and Mario - The Heart and Soul of Little Lemon</h3>
                <p className={styles.desc}>
                    With numerous television appearances and Michelin-Starred restaurants under their belt, 
                    Chef Adrian and Mario and their cuisines truly need no introduction.The menu is a 
                    delightful selection of traditional Mediterranian fare.Drinks are served till 11.30pm – a tasty way to cap off 
                    the evening along the waterfront, but not before indulging in classic desserts like 
                    Sticky Toffee Pudding and Chocolate Fondant. The two-storey, industrial warehouse-designed 
                    restaurant is modelled after its Chicago counterpart, offering indoor and al fresco dining 
                    with spectacular views of Chicago.Be sure to keep a lookout for a brand-new al fresco terrace, 
                    beverage and wine programme, and more exciting updates coming your way soon!
                </p>
            </div>

            <div className={styles.boxImg}>
                <img
                src={marioAdrian1}
                onMouseOver={(e)=>e.currentTarget.src=marioAdrian2}
                onMouseOut={(e)=>e.currentTarget.src=marioAdrian1}
                className={styles.img}/>
            </div>

        </div>
        </div>
    );
}

export default About;