import style from './Header.module.css';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className={style.listItem}><img className={style.logo} src="/App.png" alt="app png" /> </li>
                <li className={style.listItem}><a className={style.navListItem} href="#">About Us</a></li>
                <li className={style.listItem}><a className={style.navListItem} href="#">Path 2</a></li>
                <li className={style.listItem}><a className={style.navListItem} href="#">Path 3</a></li>

            </ul>
        </nav>
    );
};


export default Header;
