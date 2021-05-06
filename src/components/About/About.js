import style from './About.module.css';


const About = () => {
    return (
        <>

            <main className={style.main}>
                <h1 className={style.aboutH1}>About Alpha Music </h1>
                <div className={style.about}>
                    <p className={style.pLeft}><img src="/Music.png" alt="music png" /></p>
                    <p>
                        <i>Alpha Music</i> is the part of the app where you can share with us and the people around the globe <strong>your music taste</strong>. That is not all, you can create <strong>your own music</strong>. Yes you read it
                    you can create <strong>own songs</strong> with adding your <strong>own lyrics and cover</strong>. Also you can <strong>create full albums</strong> with number of songs. So what are you waiting for, do it , show us <strong>your creativity and bars!</strong>
                    </p>
                </div>
            </main>

            <main className={style.main}>
                <h1 className={style.aboutH1}>About Alpha Sports </h1>
                <div className={style.about}>
                    <p className={style.pRight}><img src="/Sports.png" alt="music png" /></p>
                    <p>
                        <i>Alpha Sports</i> is the part of the app for y'all sports and workout people! You can share with the world <strong>your workouts and meals</strong>.Our moto is to <strong>stay healthy together.</strong>Also you have heard the latest rumors about LeBron and the Lakers? Share it with the world with the option of creating a sport rumor!
                    </p>
                </div>
            </main>

            <main className={style.main}>
                <h1 className={style.aboutH1}>About Alpha Library </h1>
                <div className={style.about}>
                    <p className={style.pLeft}><img src="/Books.png" alt="music png" /></p>
                    <p>
                        <i>Alpha Library</i> is the gym for <strong>your brain</strong>! In this part of the app you can share what books you have read, books you have loved and those you have hated. Is is all <strong>about you and your books!</strong> With the option of creating a book review you have the full power of sharing what you love & hate!
                    </p>
                </div>
            </main>
        </>
    );
};


export default About;