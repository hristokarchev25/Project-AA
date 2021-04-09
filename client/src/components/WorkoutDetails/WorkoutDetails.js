import style from './WorkoutDetails.module.css';
import { Link } from 'react-router-dom';

import { db } from '../../utils/firebase';
import { useEffect, useState } from 'react';

const WorkoutDetails = ({
    match,
    history
}) => {
    let [workout, setWorkouts] = useState({});
    let id = match.params.workoutId;

    useEffect(() => {
        db.collection("workouts")
            .doc(id)
            .get()
            .then(res => setWorkouts(res.data()))
            .catch(err => console.log(err));
    }, []);

    const onDelete = () => {
        db.collection("workouts")
        .doc(id)
        .delete()
        .then(()=> {
            history.push('/sports')
        })
        .catch(err=>console.log(err));
    }

    return (
        <main className={style.container}>
            <h1>Workout By: {workout.name}</h1>
            <h1>Before:<img className={style.box} src={workout.pastImg} /> </h1>
            <div className={style.details}>
                
                <p><span>Exercises:</span>{workout.exercises}</p>
                <p><span>Diet:</span>{workout.diet}</p>
                <Link className={style.btn} to="/sports">Back</Link>
                <Link className={style.btn} onClick={onDelete} to="/delete">Delete</Link>
              
            </div>
            <h1>After:<img className={style.box} src={workout.presentImg} /> </h1>
        </main>
    );
};


export default WorkoutDetails;