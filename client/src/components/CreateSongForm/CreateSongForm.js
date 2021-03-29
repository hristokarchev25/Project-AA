import style from './CreateSongForm.module.css';


const CreateSongForm = () => {
    return (
        <main className={style.main}>
            <h1>Create a song</h1>
            <div className={style.form}>
                <form>

                    <label htmlFor="nameOfSong">Name of the song</label>
                    <input type="text" id="nameOfSong" name="nameOfSong" />

                    <label htmlFor="writer">Writer</label>
                    <input type="text" id="writer" name="writer" />

                    <label htmlFor="lyrics">Lyrics</label>
                    <textarea id="name" name="lyrics"></textarea>

                    <label htmlFor="CoverUrl">CoverUrl</label>
                    <input type="text" id="coverUrl" name="coverUrl" />

                    <input type="submit" value="Create" />
                </form>
            </div>
        </main>
    );

};


export default CreateSongForm;