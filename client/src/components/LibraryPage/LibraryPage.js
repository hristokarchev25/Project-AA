import style from './LibraryPage.module.css';
import LibraryItem from './LibraryItem/LibraryItem';

const LibraryPage = () => {
    return (
        <>
            <h1 className={style.headerOne}>Welcome to</h1>

            <aside className={style.menu}>
                <LibraryItem />
            </aside>

        </>
    );
};


export default LibraryPage;