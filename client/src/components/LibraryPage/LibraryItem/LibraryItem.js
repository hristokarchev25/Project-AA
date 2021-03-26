import style from './LibraryItem.module.css';
import { Link } from 'react-router-dom';

const LibraryItem = () => {
    return (
        <>
            <li className={style.menuItem}>
                <Link to="/library/createBookReview">Create Book Review</Link>
            </li>
        </>
    );
};

export default LibraryItem;