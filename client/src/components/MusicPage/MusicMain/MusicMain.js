import { Component } from 'react';

import style from './MusicMain.module.css';
import { db } from '../../../utils/firebase';
import SongCard from './SongCard/SongCard';

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
                    songs.push(data);
                })
                this.setState({ songs: songs });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <main className={style.container}>
                <h1><img className={style.logo} src="/Music.png" alt="Music logo" /></h1>

                {   this.state.songs &&
                    this.state.songs.map(song => {
                        return (
                            <SongCard {...song} />
                        )
                    })
                }
            </main>
        );
    }
}
export default MusicMain;