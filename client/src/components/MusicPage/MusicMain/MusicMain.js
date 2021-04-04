import style from './MusicMain.module.css';
import { db } from '../../../utils/firebase';
import { useState, useEffect } from 'react';

import SongCard from './SongCard/SongCard';

const MusicMain = () => {
    const [songs, setSongs] = useState([])

    const fetchSongs = async () => {
        const response = db.collection('songs');
        const data = await response.get();
        data.docs.forEach(item => {
            setSongs([ ...songs, item.data()])
        })
    }

    useEffect(() => {
        fetchSongs();
    }, [])

    return (
        <main className={style.container}>
            <h1><img className={style.logo} src="/Music.png" alt="Music logo" /></h1>

            {
                songs.map((song) => {
                    return (
                        /*  <div className={style.box}>
                             <img className={style.box} src={`${song.cover}`} />
                             <p className={style.name}>{song.song}</p>
                             <p><span>By:</span>{song.artist}</p>
                             <a className={style.btn} href="#">Details</a>
                             <a className={style.btn} href="#">Details</a>
                         </div> */
                        <SongCard {...song} />
                    )
                })
            }

            {/*  <div className={style.box}>
                <img className={style.box} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIsG2bpZY03uuYJuQd0iZ46jgtabfR5IR6A&usqp=CAU" />
                <p className={style.name}>CAAAAT</p>
                <p><span>By:</span>Bigger Cat</p>
                <a className={style.btn} href="#">Details</a>
                <a className={style.btn} href="#">Details</a>
            </div>

            <div className={style.box}>
                <img className={style.box} src="https://static.stereogum.com/uploads/2020/07/image003-3-1595598757.jpg" />
                <p className={style.name}>Wunna</p>
                <p><span>By:</span>Gunna</p>
                <a className={style.btn} href="#">Details</a>
                <a className={style.btn} href="#">Details</a>
            </div> */}


        </main>
    );
}

export default MusicMain;