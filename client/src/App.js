import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About'

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.container}>

        <About />
       
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
