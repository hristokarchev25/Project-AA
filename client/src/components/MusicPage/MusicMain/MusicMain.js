import style from './MusicMain.module.css';

const MusicMain = () => {
    return (
        <main className={style.container}>
            <h1>Some Heading</h1>

            <div className={style.box}>
                <img className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIsG2bpZY03uuYJuQd0iZ46jgtabfR5IR6A&usqp=CAU" />
                <p className={style.name}>CAAAAT</p>
                <p><span>Difficulty level:</span>111</p>
                <a className={style.btn} href="#">Details</a>
                <a className={style.btn} href="#">Details</a>
            </div>
            
            <div className={style.box}>
                <img className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIsG2bpZY03uuYJuQd0iZ46jgtabfR5IR6A&usqp=CAU" />
                <p className={style.name}>CAAAAT</p>
                <p><span>Difficulty level:</span>111</p>
                <a className={style.btn} href="#">Details</a>
                <a className={style.btn} href="#">Details</a>
            </div>

            <div className={style.box}>
                <img className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIsG2bpZY03uuYJuQd0iZ46jgtabfR5IR6A&usqp=CAU" />
                <p className={style.name}>CAAAAT</p>
                <p><span>Difficulty level:</span>111</p>
                <a className={style.btn} href="#">Details</a>
                <a className={style.btn} href="#">Details</a>
            </div>

        

        </main>
    );
}

export default MusicMain;