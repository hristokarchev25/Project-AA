import style from './AlbumDetails.module.css';
import { Link } from 'react-router-dom';

import { db } from '../../utils/firebase';
import { useEffect, useState } from 'react';

const AlbumDetails = ({
    match,
    history
}) => {
    let [album, setAlbum] = useState({});
    let id = match.params.albumId;

    useEffect(() => {
        db.collection("albums")
            .doc(id)
            .get()
            .then(res => setAlbum(res.data()))
            .catch(err => console.log(err));
    }, []);

    const onDelete = () => {
        db.collection("albums")
        .doc(id)
        .delete()
        .then(()=> {
            history.push('/music')
        })
        .catch(err=>console.log(err));
    }

    return (
        <main className={style.container}>
            <h1>{album.album}</h1>
            <img className={style.box} src={album.cover} />
            <div className={style.details}>
                <p><span>By:</span>{album.artist}</p>
                <p><span>All Songs:</span>{album.songs}</p>
                <Link className={style.btn} to="/music">Back</Link>
                <Link className={style.btn} onClick={onDelete} to="/delete">Delete</Link>
            </div>
        </main>
    );
};


export default AlbumDetails;