import style from './CreateWorkout.module.css';
import { db } from '../../utils/firebase';

const CreateWorkout = ({
    history
}) => {
    const createRumorSubmitHandler = (e) => {
        e.preventDefault();

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

    return (
        <main className={style.main}>
            <h1>Create your workout and show us your results</h1>
            <div className={style.form}>
                <form onSubmit={createRumorSubmitHandler}>

                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" />


                    <label htmlFor="exercises">Exercises you do</label>
                    <textarea id="exercises" name="exercises"></textarea>

                    <label htmlFor="diet">The food you eat</label>
                    <textarea id="diet" name="diet"></textarea>

                    <label htmlFor="presentImg">Your Present Image</label>
                    <input type="text" id="presentImg" name="presentImg" />

                    <label htmlFor="pastImg">Past Image</label>
                    <input type="text" id="pastImg" name="pastImg" />

                    <input type="submit" value="Create" />
                </form>
            </div>
        </main>
    );

};


export default CreateWorkout;