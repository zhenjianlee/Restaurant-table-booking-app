import menu from '../assets/menu.png'
import styles from './Menu.module.css'

function Menu() {

    return (
    <div className={styles.menu}>
    <img src = {menu} className={styles.img} />
    </div>);

}

export default Menu;