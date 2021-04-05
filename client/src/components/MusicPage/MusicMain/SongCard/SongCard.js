import style from './SongCard.module.css';
import { Link } from 'react-router-dom';

const SongCard = ({
    cover,
    song,
    artist

}) => {

    return (

        <div className={style.box}>
            <img className={style.box} src={`${cover}`} />
            <p className={style.name}>{song}</p>
            <p><span>By:</span>{artist}</p>
            <Link className={style.btn} to="/music/:songId">Details</Link>
        </div>

    );

}

export default SongCard;