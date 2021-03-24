import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className={style.pagecontainer}>
      <div className={style.contentwrap}>
        <Header />

      </div>


      <Footer />
    </div>
  );
}

export default App;
