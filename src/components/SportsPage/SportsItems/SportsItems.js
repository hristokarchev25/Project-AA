import style from './SportsItems.module.css';
import { Link } from 'react-router-dom';

const SportsItems = () => {
    return (
        <>
            <li className={style.menuItem}>
                <Link to="/sports/createWorkout">Create Workout</Link>
            </li>
            <li className={style.menuItem}>
                <Link to="/sports/createRumor">Create Rumor</Link>
            </li>
            
            <h1><img  className={style.logo} src="/kb.png" alt="Kobe logo" /></h1>
            
        </>
    );
};

export default SportsItems;