import { Route, Switch, Redirect } from 'react-router-dom';



import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import MusicPage from './components/MusicPage/MusicPage';
import CreateSongForm from './components/CreateSongForm/CreateSongForm';
import SongDetails from './components/SongDetails/SongDetails';
import CreateAlbumForm from './components/CreateAlbumForm/CreateAlbumForm';
import LibraryPage from './components/LibraryPage/LibraryPage';
import CreateBookReview from './components/CreateBookReview/CreateBookReview';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

import { auth } from './utils/firebase';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, [])

  return (
    <div className={style.app}>
      <Header email={user?.email} isAuth={Boolean(user)} />

      <div className={style.container}>
        {/* <h1>{user?.email}</h1> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/music" exact component={MusicPage} />
          <Route path="/music/createSong" exact component={CreateSongForm} />
          <Route path="/music/createAlbum" exact component={CreateAlbumForm} />
          <Route path="/music/:songId" exact component={SongDetails} />
          <Route path="/library" exact component={LibraryPage} />
          <Route path="/library/createBookReview" exact component={CreateBookReview} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" render={props => {
            auth.signOut();
            return <Redirect to="/" />
          }} />
        </Switch>


      </div>
      <Footer />
    </div>
  );
}

export default App;
