import style from './MusicPage.module.css';
import MusicItem from './MusicItem/MusicItem';
import MusicMain from './MusicMain/MusicMain';
const MusicPage = () => {
    return (
        <>
            <h1 className={style.headerOne}>Welcome to</h1>

            <aside className={style.menu}>
                <MusicItem />
            </aside>
            <MusicMain />
        </>
    );
};


export default MusicPage;