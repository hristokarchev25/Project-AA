import style from './AlbumCard.module.css';
import { Link } from 'react-router-dom';

const AlbumCard = ({
    cover,
    album,
    artist

}) => {

    return (

        <div className={style.box}>
            <img className={style.box} src={`${cover}`} />
            <p className={style.name}>{album}</p>
            <p><span>By:</span>{artist}</p>
            <Link className={style.btn} to="/music/album/details/:AlbumId">Details</Link>
        </div>

    );

}

export default AlbumCard;