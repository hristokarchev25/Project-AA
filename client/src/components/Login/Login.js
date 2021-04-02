import style from './Login.module.css';
import { auth } from '../../utils/firebase';

const Login = () => {

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                //console.log(userCredential);
                
            })
            .catch(err => console.log(err));
    };


    return (
        <main className={style.main}>
            <h1>Already have a registration? Then log in!</h1>
            <div className={style.form}>
                <form onSubmit={onLoginFormSubmitHandler}>

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />

                    {/* <label htmlFor="repeatPassword">Re-Password</label>
                    <input type="password" id="repeatPassword" name="repeatPassword" /> */}

                    <input type="submit" value="Login" />
                </form>
            </div>
        </main>
    );

};


export default Login;