import style from './CreateAlbumForm.module.css';


const CreateAlbumForm = () => {
    return (
        <main className={style.main}>
            <h1>Create an album</h1>
            <div className={style.form}>
                <form>

                    <label htmlFor="nameOfAlbum">Name of the Album</label>
                    <input type="text" id="nameOfAlbum" name="nameOfAlbum" />

                    <label htmlFor="artist">Artist</label>
                    <input type="text" id="artist" name="artist" />

                    <label htmlFor="songs">Name of songs</label>
                    <textarea id="songs" name="songs"></textarea>

                    <label htmlFor="CoverUrl">CoverUrl</label>
                    <input type="text" id="coverUrl" name="coverUrl" />

                    <input type="submit" value="Create" />
                </form>
            </div>
        </main>
    );

};


export default CreateAlbumForm;