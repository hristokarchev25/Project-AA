import style from './RumorDetails.module.css';
import { Link } from 'react-router-dom';

import { db } from '../../utils/firebase';
import { useEffect, useState } from 'react';

const RumorDetails = ({
    match
}) => {
    let [rumor, setRumor] = useState({});
    let id = match.params.rumortId;
    useEffect(() => {
        db.collection("rumors")
            .doc(id)
            .get()
            .then(res => setRumor(res.data()))
            .catch(err => console.log(err));
    }, []);

    return (
        <main className={style.container}>
            <h1>{rumor.player}</h1>
            <h1>-</h1>
            <h1>To: {rumor.team} ????</h1>   
            <div className={style.details}>
                <p className={style.left}><img className={style.box} src={rumor.playerImg} /></p>
                <hr/>
                <p><img className={style.box} src={rumor.teamImg} /></p>
                {/* <p><span>By:</span>{song.artist}</p> */}
                <p><span>Sources:</span>{rumor.source}</p>
                <Link className={style.btn} to="/sports">Back</Link>
            </div>
        </main>
    );
};


export default RumorDetails;