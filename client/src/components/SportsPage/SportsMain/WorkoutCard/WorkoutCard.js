import style from './WorkoutCard.module.css';
import { Link } from 'react-router-dom';

const WorkoutCard = ({
    id,
    name,
    pastImg,
    presentImg

}) => {

    return (

        <div className={style.box}>
            <img className={style.box} src={`${presentImg}`} />
           {/*  <p className={style.name}>{`${pastImg}`}</p> */}
            <p><span>By:</span>{name}</p>
            <Link className={style.btn} to={`/sports/details/workout/${id}`}>Read more</Link>
        </div>

    );

}

export default WorkoutCard;