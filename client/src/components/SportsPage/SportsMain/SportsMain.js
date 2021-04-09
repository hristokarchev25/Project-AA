import { Component } from 'react';

import style from './SportsMain.module.css';
import { db } from '../../../utils/firebase';
import WorkoutCard from './WorkoutCard/WorkoutCard';
import RumorCard from './RumorCard/RumorCard';


class SportsMain extends Component {
    state = {
        workouts: null
    }

    componentDidMount() {
        db.collection('workouts')
            .get()
            .then(snapshot => {
                const workouts = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    workouts.push({ ...data, id: doc.id });
                })
                this.setState({ workouts: workouts });
            })
            .catch(err => console.log(err));

         db.collection('rumors')
            .get()
            .then(snapshot => {
                const rumors = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    rumors.push({ ...data, id: doc.id });
                })
                this.setState({ rumors: rumors });
            })
            .catch(err => console.log(err)); 
    } 

    render() {
        return (
            <main className={style.container}>
                <h1><img className={style.logo} src="/Sports.png" alt="Sports logo" /></h1>
                <h2>Workouts from around the Globe</h2>
                <hr />
                {   this.state.workouts &&
                    this.state.workouts.map((workout, index) => {
                        return (
                            <WorkoutCard key={index} {...workout} />
                        )
                    })
                }
                <h2>Rumors</h2>
                <hr />
                {   this.state.rumors &&
                    this.state.rumors.map((rumor, index) => {
                        return (
                            <RumorCard key={index} {...rumor} />
                        )
                    })
                }
            </main>
        );
    }
}
export default SportsMain;