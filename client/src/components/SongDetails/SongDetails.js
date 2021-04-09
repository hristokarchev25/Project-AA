import style from './SongDetails.module.css';
import { Link } from 'react-router-dom';

import { db } from '../../utils/firebase';
import { useEffect, useState } from 'react';

const SongDetails = ({
    match,
    history
}) => {
    let [song, setSong] = useState({});
    let id = match.params.songId;
   // console.log(id);
    useEffect(() => {
        db.collection("songs")
            .doc(id)
            .get()
            .then(res => setSong(res.data()))
            .catch(err => console.log(err));
    }, []);

    const onDelete = () => {
        db.collection("songs")
        .doc(id)
        .delete()
        .then(()=> {
            history.push('/music')
        })
        .catch(err=>console.log(err));
    }

    return (
        <main className={style.container}>
            <h1>{song.song}</h1>
            <img className={style.box} src={song.cover} />
            <div className={style.details}>
                <p><span>By:</span>{song.artist}</p>
                <p><span>Lyrics:</span>{song.lyrics}</p>
                <Link className={style.btn} to="/music">Back</Link>
                <Link className={style.btn} onClick={onDelete} to="/delete">Delete</Link>
            </div>
        </main>
    );
};


export default SongDetails;