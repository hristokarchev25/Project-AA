import style from './CreateSongForm.module.css';
import { db } from '../../utils/firebase';
import { useState } from 'react';


const CreateSongForm = ({
    history
}) => {
    const [nameOfSong, setNameOfSong] = useState("");
    const [artist, setArtist] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [coverUrl, setCoverUrl] = useState("");

    const [errors, setErrors] = useState({});

    const createSongSubmitHandler = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
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
    }

    const validateForm = () => {
        const errors = {};

        let isValid = true;

        if (!nameOfSong.trim()) {
            errors.rec = "Name of song is  required";
            isValid = false;
        }

        if (!artist.trim()) {
            errors.recart = "Name of artist is required";
            isValid = false;
        }
        if (!lyrics.trim()) {
            errors.recLyr= "Lyrics of song are required";
            isValid = false;
        }
        if (!coverUrl.trim()) {
            errors.recImg = "Cover of song is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    return (
        <main className={style.main}>
            <h1>Create a song</h1>
            <div className={style.form}>
                <form onSubmit={createSongSubmitHandler}>

                    <label htmlFor="nameOfSong">Name of the song</label>
                    <input type="text" id="nameOfSong" value={nameOfSong} onChange={(e) => { setNameOfSong(e.target.value) }} name="nameOfSong" />

                    <label htmlFor="artist">Artist</label>
                    <input type="text" id="artist" value={artist} onChange={(e) => { setArtist(e.target.value) }} name="artist" />

                    <label htmlFor="lyrics">Lyrics</label>
                    <textarea id="name" value={lyrics} onChange={(e) => { setLyrics(e.target.value) }} name="lyrics" placeholder="I believe I can fly..."></textarea>

                    <label htmlFor="CoverUrl">Song Cover</label>
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


export default CreateSongForm;