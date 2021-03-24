import style from './About.module.css';


const About = () => {
    return (
        <main className={style.main}>
            <h1 className={style.aboutH1}>Get to know us</h1>
            <div className={style.about}>
                <p className={style.pCenter}><img src="/App.png" alt="app png" /></p>
                <p>

                  To be written

                </p>
            </div>
        </main>
    );
};


export default About;