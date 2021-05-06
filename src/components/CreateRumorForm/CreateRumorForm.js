import style from './CreateRumor.module.css';
import { db } from '../../utils/firebase';
import { useState } from 'react';
const CreateRumorForm = ({
    history
}) => {

    const [nameOfPlayer, setNameOfPlayer] = useState("");
    const [team, setTeam] = useState("");
    const [source, setSource] = useState("");
    const [playerImg, setPlayerImg] = useState("");
    const [teamImg, setTeamImg] = useState("");

    const [errors, setErrors] = useState({});

    const createRumorSubmitHandler = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
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

    }

    const validateForm = () => {
        const errors = {};

        let isValid = true;

        if (!nameOfPlayer.trim()) {
            errors.recName = "Name of player is  required";
            isValid = false;
        }

        if (!team.trim()) {
            errors.recTm = "Name of team is required";
            isValid = false;
        }
        if (!source.trim()) {
            errors.recSr = "Source is required";
            isValid = false;
        }
        if (!playerImg.trim()) {
            errors.recImgPlayer = "Player image is required";
            isValid = false;
        }
        if (!teamImg.trim()) {
            errors.recImgTeam = "Team image is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    return (
        <main className={style.main}>
            <h1>Create the latest rumors from the sports world you've heard</h1>
            <div className={style.form}>
                <form onSubmit={createRumorSubmitHandler}>

                    <label htmlFor="nameOfPlayer">Player</label>
                    <input type="text" id="nameOfPlayer" value={nameOfPlayer} onChange={(e) => { setNameOfPlayer(e.target.value) }} name="nameOfPlayer" />

                    <label htmlFor="team">Team</label>
                    <input type="text" id="team" value={team} onChange={(e) => { setTeam(e.target.value) }} name="team" />

                    <label htmlFor="source">Source</label>
                    <textarea id="source" value={source} onChange={(e) => { setSource(e.target.value) }} name="source"></textarea>

                    <label htmlFor="playerImg">Player Image</label>
                    <input type="text" id="playerImg" value={playerImg} onChange={(e) => { setPlayerImg(e.target.value) }} name="playerImg" />

                    <label htmlFor="teamImg">Team Image</label>
                    <input type="text" id="teamImg" value={teamImg} onChange={(e) => { setTeamImg(e.target.value) }} name="teamImg" />

                    {Object.keys(errors).map((key) => {
                        return <div className={style.error}>{errors[key]}</div>
                    })}

                    <input type="submit" value="Create" />
                </form>
            </div>
        </main>
    );

};


export default CreateRumorForm;