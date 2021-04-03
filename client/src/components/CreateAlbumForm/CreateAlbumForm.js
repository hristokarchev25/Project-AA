import style from './CreateAlbumForm.module.css';


const CreateAlbumForm = () => {
    const createAlbumSubmitHandler = (e) => {
        e.preventDefault();

        const album = e.target.nameOfAlbum.value;
        const artist = e.target.artist.value;
        const songs = e.target.songs.value;
        const cover = e.target.coverUrl.value;

        console.log(album, artist, songs, cover);
    }

    return (
        <main className={style.main}>
            <h1>Create an album</h1>
            <div className={style.form}>
                <form onSubmit={createAlbumSubmitHandler}>

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