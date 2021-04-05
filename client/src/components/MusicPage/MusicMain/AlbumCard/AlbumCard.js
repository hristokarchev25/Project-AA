import style from './AlbumCard.module.css';


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
            <a className={style.btn} href="#">Details</a>
        </div>

    );

}

export default AlbumCard;