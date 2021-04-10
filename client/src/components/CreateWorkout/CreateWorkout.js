import style from './CreateWorkout.module.css';
import { db } from '../../utils/firebase';
import { useState } from 'react';
const CreateWorkout = ({
    history
}) => {

    const [name, setName] = useState("");
    const [exercises, setExercises] = useState("");
    const [diet, setDiet] = useState("");
    const [presentImg, setPresentImg] = useState("");
    const [pastImg, setPastImg] = useState("");

    const [errors, setErrors] = useState({});

    const createRumorSubmitHandler = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const name = e.target.name.value;
            const exercises = e.target.exercises.value;
            const diet = e.target.diet.value;
            const presentImg = e.target.presentImg.value;
            const pastImg = e.target.pastImg.value;


            db.collection('workouts').add({
                name,
                exercises,
                diet,
                presentImg,
                pastImg
            })
                .then((workout) => {
                    //console.log(rumor);
                    history.push('/sports');
                })
                .catch(err => console.log(err));
        }

    }

    const validateForm = () => {
        const errors = {};

        let isValid = true;

        if (!name.trim()) {
            errors.recName = "Name of creator is  required";
            isValid = false;
        }

        if (!exercises.trim()) {
            errors.recEx = " Exercises are required";
            isValid = false;
        }
        if (!diet.trim()) {
            errors.recLyr = "Diet is required";
            isValid = false;
        }
        if (!presentImg.trim()) {
            errors.recImgPresent = "Present image is required";
            isValid = false;
        }
        if (!pastImg.trim()) {
            errors.recImgPast = "Past image is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    return (
        <main className={style.main}>
            <h1>Create your workout and show us your results</h1>
            <div className={style.form}>
                <form onSubmit={createRumorSubmitHandler}>

                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} name="name" />

                    <label htmlFor="exercises">Exercises you do</label>
                    <textarea id="exercises" value={exercises} onChange={(e) => { setExercises(e.target.value) }} name="exercises"></textarea>

                    <label htmlFor="diet">The food you eat</label>
                    <textarea id="diet" value={diet} onChange={(e) => { setDiet(e.target.value) }} name="diet"></textarea>

                    <label htmlFor="presentImg">Your Present Image</label>
                    <input type="text" id="presentImg" value={presentImg} onChange={(e) => { setPresentImg(e.target.value) }} name="presentImg" />

                    <label htmlFor="pastImg">Past Image</label>
                    <input type="text" id="pastImg" value={pastImg} onChange={(e) => { setPastImg(e.target.value) }} name="pastImg" />

                    {Object.keys(errors).map((key) => {
                        return <div className={style.error}>{errors[key]}</div>
                    })}

                    <input type="submit" value="Create" />
                </form>
            </div>
        </main>
    );

};


export default CreateWorkout;