import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className={style.listItem}><Link to="/"><img className={style.logo} src="/App.png" alt="app png" /></Link></li>
                <li className={style.listItem}><Link className={style.navListItem} to="/about">About Us</Link></li>
                <li className={style.listItem}><Link className={style.navListItem} to="/music">Alpha Music</Link></li>
                <li className={style.listItem}><Link className={style.navListItem} to="/sports">Alpha Sports</Link></li>
                <li className={style.listItem}><Link className={style.navListItem} to="/library">Alpha Library</Link></li>
                <li className={style.listItem}><Link className={style.navListItem} to="/registration">Join us</Link></li>
                <li className={style.listItem}><Link className={style.navListItem} to="/login">Login</Link></li>
                <li className={style.listItem}><Link className={style.navListItem} to="/logout">Logout</Link></li>
            </ul>
        </nav>
    );
};


export default Header;
