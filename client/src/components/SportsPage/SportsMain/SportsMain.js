import { Component } from 'react';

import style from './SportsMain.module.css';
/* import { db } from '../../../utils/firebase';
import SongCard from './SongCard/SongCard';
import AlbumCard from './AlbumCard/AlbumCard'; */


class SportsMain extends Component {
   /*  state = {
        songs: null
    }

    componentDidMount() {
        db.collection('songs')
            .get()
            .then(snapshot => {
                const songs = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    songs.push({ ...data, id: doc.id });
                })
                this.setState({ songs: songs });
            })
            .catch(err => console.log(err));

        db.collection('albums')
            .get()
            .then(snapshot => {
                const albums = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    albums.push({ ...data, id: doc.id });
                })
                this.setState({ albums: albums });
            })
            .catch(err => console.log(err));
    } */

    render() {
        return (
            <main className={style.container}>
                <h1><img className={style.logo} src="/Sports.png" alt="Sports logo" /></h1>
                <h2>Workouts from around the Globe</h2>
                <hr />
               {/*  {   this.state.songs &&
                    this.state.songs.map((song, index) => {
                        return (
                            <SongCard key={index} {...song} />
                        )
                    })
                } */}
                <h2>Rumors</h2>
                <hr />
             {/*    {   this.state.albums &&
                    this.state.albums.map((album, index) => {
                        return (
                            <AlbumCard key={index} {...album} />
                        )
                    })
                } */}
            </main>
        );
    }
}
export default SportsMain;