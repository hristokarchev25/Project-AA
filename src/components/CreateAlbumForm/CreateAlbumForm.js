import style from './CreateAlbumForm.module.css';
import { db } from '../../utils/firebase';
import { useState } from 'react';
const CreateAlbumForm = ({
    history
}) => {
    const [nameOfAlbum, setNameOfAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [songs, setSongs] = useState("");
    const [coverUrl, setCoverUrl] = useState("");

    const [errors, setErrors] = useState({});

    const createAlbumSubmitHandler = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const album = e.target.nameOfAlbum.value;
            const artist = e.target.artist.value;
            const songs = e.target.songs.value;
            const cover = e.target.coverUrl.value;


            db.collection('albums').add({
                album,
                artist,
                songs,
                cover
            })
                .then((album) => {
                    console.log(album);
                    history.push('/music');
                })
                .catch(err => console.log(err));
        }
    }

    const validateForm = () => {
        const errors = {};

        let isValid = true;

        if (!nameOfAlbum.trim()) {
            errors.rec = "Name of the album is  required";
            isValid = false;
        }

        if (!artist.trim()) {
            errors.recArt = "Name of the artist is required";
            isValid = false;
        }
        if (!songs.trim()) {
            errors.recLyr = "Songs are required";
            isValid = false;
        }
        if (!coverUrl.trim()) {
            errors.recImg = "Cover of album is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }


    return (
        <main className={style.main}>
            <h1>Create an album</h1>
            <div className={style.form}>
                <form onSubmit={createAlbumSubmitHandler}>

                    <label htmlFor="nameOfAlbum">Name of the Album</label>
                    <input type="text" id="nameOfAlbum" value={nameOfAlbum} onChange={(e) => { setNameOfAlbum(e.target.value) }} name="nameOfAlbum" />

                    <label htmlFor="artist">Artist</label>
                    <input type="text" id="artist" value={artist} onChange={(e) => { setArtist(e.target.value) }} name="artist" />

                    <label htmlFor="songs">Name of songs</label>
                    <textarea id="songs" value={songs} onChange={(e) => { setSongs(e.target.value) }} name="songs"></textarea>

                    <label htmlFor="CoverUrl">Cover of album</label>
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


export default CreateAlbumForm;