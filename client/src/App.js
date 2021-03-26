import { Route, Switch } from 'react-router-dom';



import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About'


import Demo from './components/Demo/Demo';
function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.container}>

        <Switch>
           <Route path="/" exact component={About}/>
           <Route path="/pathTest"  component={Demo}/>
        </Switch>


      </div>
      <Footer />
    </div>
  );
}

export default App;
