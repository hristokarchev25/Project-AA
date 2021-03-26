import style from './MusicMain.module.css';

const MusicMain = () => {
    return (
        <main className={style.container}>
            <h1>Some Heading</h1>

            <div className={style.box}>
                <img className={style.box} src="https://upload.wikimedia.org/wikipedia/en/4/44/Lil_Baby_-_My_Turn.png" />
                <p className={style.name}>My Turn</p>
                <p><span>By:</span>Lil Baby</p>
                <a className={style.btn} href="#">Details</a>
                <a className={style.btn} href="#">Details</a>
            </div>
            
            <div className={style.box}>
                <img className={style.box} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIsG2bpZY03uuYJuQd0iZ46jgtabfR5IR6A&usqp=CAU" />
                <p className={style.name}>CAAAAT</p>
                <p><span>By:</span>Bigger Cat</p>
                <a className={style.btn} href="#">Details</a>
                <a className={style.btn} href="#">Details</a>
            </div>

            <div className={style.box}>
                <img className={style.box} src="https://static.stereogum.com/uploads/2020/07/image003-3-1595598757.jpg" />
                <p className={style.name}>Wunna</p>
                <p><span>By:</span>Gunna</p>
                <a className={style.btn} href="#">Details</a>
                <a className={style.btn} href="#">Details</a>
            </div>
        

        </main>
    );
}

export default MusicMain;