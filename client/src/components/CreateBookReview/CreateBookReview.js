import style from './CreateBookReview.module.css';
import { db } from '../../utils/firebase';

const CreateBookReview = ({
    history
}) => {
    const createReviewubmitHandler = (e) => {
        e.preventDefault();

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
    return (
        <main className={style.main}>
            <h1>Create a book review</h1>
            <div className={style.form}>
                <form onSubmit={createReviewubmitHandler}>

                    <label htmlFor="nameOfBook">Name of the Book</label>
                    <input type="text" id="nameOfBook" name="nameOfBook" />

                    <label htmlFor="writer">Writer</label>
                    <input type="text" id="writer" name="writer" />

                    <label htmlFor="review">Review</label>
                    <textarea id="review" name="review" placeholder="Did you liked it or hated it?"></textarea>

                    <label htmlFor="CoverUrl">Book Cover</label>
                    <input type="text" id="coverUrl" name="coverUrl" />

                    <input type="submit" value="Create" />
                </form>
            </div>
        </main>
    );

};


export default CreateBookReview;