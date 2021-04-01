import { Route, Switch } from 'react-router-dom';



import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import MusicPage from './components/MusicPage/MusicPage';
import CreateSongForm from './components/CreateSongForm/CreateSongForm';
import CreateAlbumForm from './components/CreateAlbumForm/CreateAlbumForm';
import LibraryPage from './components/LibraryPage/LibraryPage';
import CreateBookReview from './components/CreateBookReview/CreateBookReview';
import Registration from './components/Registration/Registration';
function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.container}>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/music" exact component={MusicPage} />
          <Route path="/music/createSong" exact component={CreateSongForm} />
          <Route path="/music/createAlbum" exact component={CreateAlbumForm} />
          <Route path="/library" exact component={LibraryPage} />
          <Route path="/library/createBookReview" exact component={CreateBookReview} />
          <Route path="/registration" exact component={Registration} />
        </Switch>


      </div>
      <Footer />
    </div>
  );
}

export default App;
