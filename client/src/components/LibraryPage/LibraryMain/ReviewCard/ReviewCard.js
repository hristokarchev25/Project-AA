import style from './ReviewCard.module.css';
import { Link } from 'react-router-dom';
const ReviewCard = ({
    id,
    cover,
    book,
    writer

}) => {

    return (

        <div className={style.box}>
            <img className={style.box} src={`${cover}`} />
            <p className={style.name}>{book}</p>
            <p><span>By:</span>{writer}</p>
            <Link className={style.btn} to={`/library/details/review/${id}`}>Details</Link>
        </div>

    );

}

export default ReviewCard;