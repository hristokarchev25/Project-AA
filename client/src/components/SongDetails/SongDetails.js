import style from './SongDetails.module.css';
import { Link } from 'react-router-dom';
const SongDetails = () => {
    return (
        <main className={style.container}>
            <h1>Song Name</h1>
            <img className={style.box} src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" />
            <div className={style.details}>
                <p><span>Description:</span>asdsadsd</p>
                <Link className={style.btn} to="/music">Back</Link>
            </div>
        </main>
    );
};


export default SongDetails;