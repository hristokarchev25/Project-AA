import style from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className={style.main}>
            <h1 className={style.aboutH1}>Get to know us</h1>
            <div className={style.about}>
                <p className={style.pCenter}><img src="/App.png" alt="app png" /></p>
                <p>
                    <i>The Alpha App</i> is an amazing place, where you can do a lot of stuff. It is a love letter for people who love <strong>music</strong>, <strong>sports</strong> and <strong>books</strong>.
                    It is created by <strong>Hristo Karchev</strong> , a student from <strong>SoftUni</strong>.At this <Link to={"/about"}>link</Link> you can read more about the features of the app. We are happy to have you! <Link to={"/registration"}>Join us</Link>! If you have already <Link to={"/login"}>log in</Link> and enjoy!
                </p>
            </div>
        </main>
    );

};


export default Home;