import style from './SportsPage.module.css';
import SportsItems from './SportsItems/SportsItems';
/* import LibraryMain from './LibraryMain/LibraryMain'; */
const SportsPage = () => {
    return (
        <>
            <h1 className={style.headerOne}>Welcome to</h1>

            <aside className={style.menu}>
                <SportsItems />
            </aside>
               {/*  <LibraryMain/> */}
        </>
    );
};


export default SportsPage;