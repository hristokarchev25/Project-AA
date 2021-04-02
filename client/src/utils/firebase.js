import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCojKO75rRK3bQQz99at9KbbRuW28pO0N0",
    authDomain: "alpha-app-88913.firebaseapp.com",
    projectId: "alpha-app-88913",
    storageBucket: "alpha-app-88913.appspot.com",
    messagingSenderId: "1023358456491",
    appId: "1:1023358456491:web:e58c5a7365446db0c91dee"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Logged In:');
        console.log(user);
    } else {
        console.log('Logged Out:');
    }
});

export default firebase;

export const auth = firebase.auth();