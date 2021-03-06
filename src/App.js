import { Route, Switch, Redirect } from 'react-router-dom';



import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import MusicPage from './components/MusicPage/MusicPage';
import CreateSongForm from './components/CreateSongForm/CreateSongForm';
import SongDetails from './components/SongDetails/SongDetails';
import AlbumDetails from './components/AlbumDetails/AlbumDetails';
import CreateAlbumForm from './components/CreateAlbumForm/CreateAlbumForm';
import LibraryPage from './components/LibraryPage/LibraryPage';
import ReviewsDetails from './components/ReviewsDetails/ReviewsDetails';
import CreateBookReview from './components/CreateBookReview/CreateBookReview';
import SportsPage from './components/SportsPage/SportsPage';
import CreateRumorForm from './components/CreateRumorForm/CreateRumorForm';
import CreateWorkout from './components/CreateWorkout/CreateWorkout';
import WorkoutDetails from './components/WorkoutDetails/WorkoutDetails';
import RumorDetails from './components/RumorDetails/RumorDetails';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

import { auth } from './utils/firebase';
import { useEffect, useState } from 'react';
import WorkoutCard from './components/SportsPage/SportsMain/WorkoutCard/WorkoutCard';

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
          <Route path="/music/details/song/:songId" exact component={SongDetails} />
          <Route path="/music/details/album/:albumId" exact component={AlbumDetails} />
          <Route path="/library" exact component={LibraryPage} />
          <Route path="/library/createBookReview" exact component={CreateBookReview} />
          <Route path="/library/details/review/:reviewsId" exact component={ReviewsDetails} />
          <Route path="/sports" exact component={SportsPage} />
          <Route path="/sports/createRumor" exact component={CreateRumorForm} />
          <Route path="/sports/createWorkout" exact component={CreateWorkout} />
          <Route path="/sports/details/workout/:workoutId" exact component={WorkoutDetails} />
          <Route path="/sports/details/rumor/:rumortId" exact component={RumorDetails} />
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
