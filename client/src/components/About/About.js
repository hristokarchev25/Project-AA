import style from './About.module.css';


const About = () => {
    return (
        <>
        <main className={style.main}>
            <h1 className={style.aboutH1}>Get to know us</h1>
            <div className={style.about}>
                <p className={style.pCenter}><img src="/App.png" alt="app png" /></p>
                <p>
                    <i>The Alpha App</i> is an amazing place, where you can do a lot of stuff. It is a love letter for people who love <strong>music</strong>, <strong>sports</strong> and <strong>books</strong>.
                    It is created by <strong>Hristo Karchev</strong> , a student from <strong>SoftUni</strong>. Below you can read more about the features of the app. We are happy to have you, enjoy!
                </p>
            </div>
        </main>

        <main className={style.main}>
            <h1 className={style.aboutH1}>About Alpha Music </h1>
            <div className={style.about}>
                <p className={style.pCenter}><img src="/Music.png" alt="music png" /></p>
                <p>
                    <i>The Alpha App</i> is an amazing place, where you can do a lot of stuff. It is a love letter for people who love <strong>music</strong>, <strong>sports</strong> and <strong>books</strong>.
                    It is created by <strong>Hristo Karchev</strong> , a student from <strong>SoftUni</strong>. Below you can read more about the features of the app. We are happy to have you, enjoy!
                </p>
            </div>
        </main>

        <main className={style.main}>
            <h1 className={style.aboutH1}>About Alpha Sports </h1>
            <div className={style.about}>
                <p className={style.pCenter}><img src="/Sports.png" alt="music png" /></p>
                <p>
                    <i>The Alpha App</i> is an amazing place, where you can do a lot of stuff. It is a love letter for people who love <strong>music</strong>, <strong>sports</strong> and <strong>books</strong>.
                    It is created by <strong>Hristo Karchev</strong> , a student from <strong>SoftUni</strong>. Below you can read more about the features of the app. We are happy to have you, enjoy!
                </p>
            </div>
        </main>

        <main className={style.main}>
            <h1 className={style.aboutH1}>About Alpha Library </h1>
            <div className={style.about}>
                <p className={style.pCenter}><img src="/Books.png" alt="music png" /></p>
                <p>
                    <i>The Alpha App</i> is an amazing place, where you can do a lot of stuff. It is a love letter for people who love <strong>music</strong>, <strong>sports</strong> and <strong>books</strong>.
                    It is created by <strong>Hristo Karchev</strong> , a student from <strong>SoftUni</strong>. Below you can read more about the features of the app. We are happy to have you, enjoy!
                </p>
            </div>
        </main>
        </>
    );
};


export default About;