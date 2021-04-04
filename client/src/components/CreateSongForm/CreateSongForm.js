import style from './CreateSongForm.module.css';
import { db } from '../../utils/firebase';

const CreateSongForm = ({
    history
}) => {
    const createSongSubmitHandler = (e) => {
        e.preventDefault();
        const song = e.target.nameOfSong.value;
        const artist = e.target.artist.value;
        const lyrics = e.target.lyrics.value;
        const cover = e.target.coverUrl.value;

        /* console.log(song, artist, lyrics, cover); */

        db.collection('songs').add({
            song,
            artist,
            lyrics,
            cover
        })
            .then((song) => {
                console.log(song);
                history.push('/music');
            })
            .catch(err => console.log(err));
    }


    return (
        <main className={style.main}>
            <h1>Create a song</h1>
            <div className={style.form}>
                <form onSubmit={createSongSubmitHandler}>

                    <label htmlFor="nameOfSong">Name of the song</label>
                    <input type="text" id="nameOfSong" name="nameOfSong" />

                    <label htmlFor="artist">Artist</label>
                    <input type="text" id="artist" name="artist" />

                    <label htmlFor="lyrics">Lyrics</label>
                    <textarea id="name" name="lyrics" placeholder="I believe I can fly..."></textarea>

                    <label htmlFor="CoverUrl">CoverUrl</label>
                    <input type="text" id="coverUrl" name="coverUrl" />

                    <input type="submit" value="Create" />
                </form>
            </div>
        </main>
    );

};


export default CreateSongForm;