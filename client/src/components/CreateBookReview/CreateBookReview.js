import style from './CreateBookReview.module.css';


const CreateBookReview = () => {
    return (
        <main className={style.main}>
            <h1>Create a book review</h1>
            <div className={style.form}>
                <form>

                    <label htmlFor="nameOfBook">Name of the Book</label>
                    <input type="text" id="nameOfBook" name="nameOfBook" />

                    <label htmlFor="writer">Writer</label>
                    <input type="text" id="writer" name="writer" />

                    <label htmlFor="review">Review</label>
                    <textarea id="review" name="review" placeholder="Did you liked it or hated it?"></textarea>

                    <label htmlFor="CoverUrl">CoverUrl</label>
                    <input type="text" id="coverUrl" name="coverUrl" />

                    <input type="submit" value="Create" />
                </form>
            </div>
        </main>
    );

};


export default CreateBookReview;