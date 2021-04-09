import style from './SportsItems.module.css';
import { Link } from 'react-router-dom';

const SportsItems = () => {
    return (
        <>
            <li className={style.menuItem}>
                <Link to="/sports/createSong">Create Workout</Link>
            </li>
            <li className={style.menuItem}>
                <Link to="/sports/createRumor">Create Rumor</Link>
            </li>
        </>
    );
};

export default SportsItems;