import { Component } from 'react';

import style from './LibraryMain.module.css';
import { db } from '../../../utils/firebase';
import ReviewCard from './ReviewCard/ReviewCard';

class LibraryMain extends Component {

    state = {
        reviews: null
    }

    componentDidMount() {
        db.collection('reviews')
            .get()
            .then(snapshot => {
                const reviews = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    reviews.push(data);
                })
                this.setState({ reviews: reviews });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <main className={style.container}>
                <h1><img className={style.logo} src="/Books.png" alt="Music logo" /></h1>

                {   this.state.reviews &&
                    this.state.reviews.map((review, index) => {
                        return (
                            <ReviewCard key={index} {...review} />
                        )
                    })
                }
            </main>
        )
    }
}

export default LibraryMain;