import style from './Registration.module.css';
import { auth } from '../../utils/firebase';
import { useState } from 'react';

const Registration = ({
    history
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const email = e.target.email.value;
            const password = e.target.password.value;

            auth.createUserWithEmailAndPassword(email, password)
                .then(userCredential => {
                    console.log('Register');
                    history.push('/about');
                })
                .catch(err => console.log(err));
        }

    }

     const validateForm = () => {
        const errors = {};

        let isValid = true;

        if (!email.trim()) {
            errors.rec = "Email required";
            isValid = false;
        }

        if (!password.trim()) {
            errors.recPass = "Password required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }
 
    return (
        <main className={style.main}>
            <h1>Join us!</h1>
            <div className={style.form}>
                <form onSubmit={onRegisterSubmitHandler}>

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" />
                    {Object.keys(errors).map((key) => {
                        return <div className={style.error}>{errors[key]}</div>
                    })}
                   

                    <input type="submit" value="Register" />
                </form>
            </div>
        </main>
    );

};


export default Registration;