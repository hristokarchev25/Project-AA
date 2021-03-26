import style from './LibraryPage.module.css';
import LibraryItem from './LibraryItem/LibraryItem';
import LibraryMain from './LibraryMain/LibraryMain';
const LibraryPage = () => {
    return (
        <>
            <h1 className={style.headerOne}>Welcome to</h1>

            <aside className={style.menu}>
                <LibraryItem />
            </aside>
                <LibraryMain/>
        </>
    );
};


export default LibraryPage;