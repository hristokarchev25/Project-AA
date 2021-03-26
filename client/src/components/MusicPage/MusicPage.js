import style from './MusicPage.module.css';
import MusicItem from './MusicItem/MusicItem';

const MusicPage = () => {
    return (
        <>
            <h1 className={style.headerOne}>Welcome to  <p><img className={style.logo} src="/Music.png" alt="Music logo" /></p></h1>

            <aside className={style.menu}>
                <MusicItem />
            </aside>
        </>
    );
};


export default MusicPage;