import style from './MusicItem.module.css';
import { Link } from 'react-router-dom';
const MusicItem = () => {
    return (
        <>
            <li className={style.menuItem}>
                <Link to="/music/createSong">Create Song</Link>
            </li>
            <li className={style.menuItem}>
                <Link to="/music/createAlbum">Create Album</Link>
            </li>
        </>
    );
};

export default MusicItem;