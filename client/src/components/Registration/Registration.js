import style from './Registration.module.css';


const Registration = () => {
    return (
        <main className={style.main}>
            <h1>Join us!</h1>
            <div className={style.form}>
                <form>

                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />

                    <label htmlFor="repeatPassword">Re-Password</label>
                    <input type="password" id="repeatPassword" name="repeatPassword" />

                    <input type="submit" value="Register" />
                </form>
            </div>
        </main>
    );

};


export default Registration;