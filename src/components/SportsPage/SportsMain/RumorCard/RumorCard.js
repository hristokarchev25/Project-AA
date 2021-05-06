import style from './RumorCard.module.css';
import { Link } from 'react-router-dom';

const AlbumCard = ({
    id,
    player,
    playerImg,
    teamImg,
    team
}) => {

    return (

        <div className={style.box}>
            <img className={style.box} src={`${playerImg}`} />
            <p className={style.name}>{player}</p>
            <img className={style.box} src={`${teamImg}`} />
            <p className={style.name}>To: {team}</p>
            <Link className={style.btn} to={`/sports/details/rumor/${id}`}>Read More</Link>
        </div>

    );

}

export default AlbumCard;