import style from './Registration.module.css';
import { auth } from '../../utils/firebase';

const Registration = ({
    history
}) => {
    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log('Register');
                history.push('/about');
            })
            .catch(err => console.log(err));
    }


    return (
        <main className={style.main}>
            <h1>Join us!</h1>
            <div className={style.form}>
                <form onSubmit={onRegisterSubmitHandler}>

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />

                    {/* <label htmlFor="repeatPassword">Re-Password</label>
                    <input type="password" id="repeatPassword" name="repeatPassword" /> */}

                    <input type="submit" value="Register" />
                </form>
            </div>
        </main>
    );

};


export default Registration;