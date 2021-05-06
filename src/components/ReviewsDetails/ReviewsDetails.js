import style from './ReviewsDetails.module.css';
import { Link } from 'react-router-dom';

import { db } from '../../utils/firebase';
import { useEffect, useState } from 'react';


const AlbumDetails = ({
    match,
    history
}) => {
    let [review, setReview] = useState({});
    let id = match.params.reviewsId;
    useEffect(() => {
        db.collection("reviews")
            .doc(id)
            .get()
            .then(res => setReview(res.data()))
            .catch(err => console.log(err));
    }, []);

    const onDelete = () => {
        db.collection("reviews")
        .doc(id)
        .delete()
        .then(()=> {
            history.push('/library')
        })
        .catch(err=>console.log(err));
    }

    return (
        <main className={style.container}>
            <h1>{review.book}</h1>
            <img className={style.box} src={review.cover} />
            <div className={style.details}>
                <p><span>By:</span>{review.writer}</p>
                <p><span>Book Review:</span>{review.review}</p>
                <Link className={style.btn} to="/library">Back</Link>
                <Link className={style.btn} onClick={onDelete} to="/delete">Delete</Link>
            </div>
        </main>
    );
};


export default AlbumDetails;