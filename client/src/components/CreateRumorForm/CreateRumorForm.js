import style from './CreateRumor.module.css';
import { db } from '../../utils/firebase';

const CreateRumorForm = ({
    history
}) => {
    const createRumorSubmitHandler = (e) => {
        e.preventDefault();

        const player = e.target.nameOfPlayer.value;
        const team = e.target.team.value;
        const source = e.target.source.value;
        const playerImg = e.target.playerImg.value;
        const teamImg = e.target.teamImg.value;


        db.collection('rumors').add({
           player,
           team,
           source,
           playerImg,
           teamImg
        })
            .then((rumor) => {
                //console.log(rumor);
                history.push('/sports');
            })
            .catch(err => console.log(err));

    }

    return (
        <main className={style.main}>
            <h1>Create the latest rumors from the sports world you've heard</h1>
            <div className={style.form}>
                <form onSubmit={createRumorSubmitHandler}>

                    <label htmlFor="nameOfPlayer">Player</label>
                    <input type="text" id="nameOfPlayer" name="nameOfPlayer" />

                    <label htmlFor="team">Team</label>
                    <input type="text" id="team" name="team" />

                    <label htmlFor="source">Source</label>
                    <textarea id="source" name="source"></textarea>

                    <label htmlFor="playerImg">PlayerImg</label>
                    <input type="text" id="playerImg" name="playerImg" />

                    <label htmlFor="teamImg">TeamImg</label>
                    <input type="text" id="teamImg" name="teamImg" />

                    <input type="submit" value="Create" />
                </form>
            </div>
        </main>
    );

};


export default CreateRumorForm;