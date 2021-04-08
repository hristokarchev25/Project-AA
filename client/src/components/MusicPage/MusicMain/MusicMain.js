import { Component } from 'react';

import style from './MusicMain.module.css';
import { db } from '../../../utils/firebase';
import SongCard from './SongCard/SongCard';
import AlbumCard from './AlbumCard/AlbumCard';

class MusicMain extends Component {
    state = {
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
                    albums.push(data);
                })
                this.setState({ albums: albums });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <main className={style.container}>
                <h1><img className={style.logo} src="/Music.png" alt="Music logo" /></h1>
                <h2>Songs List</h2>
                <hr/>
                {   this.state.songs &&
                    this.state.songs.map((song, index) => {
                        return (
                            <SongCard key={index} {...song} />
                        )
                    })
                }
                <h2>Albums List</h2>
                <hr/>
                {   this.state.albums &&
                    this.state.albums.map((album, index) => {
                        return (
                            <AlbumCard key={index} {...album} />
                        )
                    })
                }
            </main>
        );
    }
}
export default MusicMain;