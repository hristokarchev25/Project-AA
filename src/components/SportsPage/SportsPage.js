import style from './SportsPage.module.css';
import SportsItems from './SportsItems/SportsItems';
import SportsMain from './SportsMain/SportsMain';
const SportsPage = () => {
    return (
        <>
            <h1 className={style.headerOne}>Welcome to</h1>

            <aside className={style.menu}>
                <SportsItems />
            </aside>
            <SportsMain />
        </>
    );
};


export default SportsPage;