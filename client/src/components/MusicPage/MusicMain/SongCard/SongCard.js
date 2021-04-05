import style from './SongCard.module.css';


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
            <a className={style.btn} href="#">Details</a>
        </div>

    );

}

export default SongCard;