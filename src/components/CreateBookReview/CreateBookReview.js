import style from './CreateBookReview.module.css';
import { db } from '../../utils/firebase';
import { useState } from 'react';
const CreateBookReview = ({
    history
}) => {
    const [nameOfBook, setNameOfBook] = useState("");
    const [writer, setWriter] = useState("");
    const [review, setReview] = useState("");
    const [coverUrl, setCoverUrl] = useState("");

    const [errors, setErrors] = useState({});
    const createReviewubmitHandler = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const book = e.target.nameOfBook.value;
            const writer = e.target.writer.value;
            const review = e.target.review.value;
            const cover = e.target.coverUrl.value;

            // console.log(book, writer, review, cover);

            db.collection('reviews').add({
                book,
                writer,
                review,
                cover
            })
                .then((rev) => {
                    console.log(rev);
                    history.push('/library');
                })
                .catch(err => console.log(err));
        }

    }

    const validateForm = () => {
        const errors = {};

        let isValid = true;

        if (!nameOfBook.trim()) {
            errors.rec = "Name of the book is  required";
            isValid = false;
        }

        if (!writer.trim()) {
            errors.recArt = "Name of the writer is required";
            isValid = false;
        }
        if (!review.trim()) {
            errors.recLyr = "Review is required";
            isValid = false;
        }
        if (!coverUrl.trim()) {
            errors.recImg = "Cover of book is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    return (
        <main className={style.main}>
            <h1>Create a book review</h1>
            <div className={style.form}>
                <form onSubmit={createReviewubmitHandler}>

                    <label htmlFor="nameOfBook">Name of the Book</label>
                    <input type="text" id="nameOfBook" value={nameOfBook} onChange={(e) => { setNameOfBook(e.target.value) }} name="nameOfBook" />

                    <label htmlFor="writer">Writer</label>
                    <input type="text" id="writer" value={writer} onChange={(e) => { setWriter(e.target.value) }} name="writer" />

                    <label htmlFor="review">Review</label>
                    <textarea id="review" value={review} onChange={(e) => { setReview(e.target.value) }} name="review" placeholder="Did you liked it or hated it?"></textarea>

                    <label htmlFor="CoverUrl">Book Cover</label>
                    <input type="text" id="coverUrl" value={coverUrl} onChange={(e) => { setCoverUrl(e.target.value) }} name="coverUrl" />

                    {Object.keys(errors).map((key) => {
                        return <div className={style.error}>{errors[key]}</div>
                    })}


                    <input type="submit" value="Create" />
                </form>
            </div>
        </main>
    );

};


export default CreateBookReview;