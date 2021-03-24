import style from './Footer.module.css';


const Footer = () => {
    return (
        <div className={style.mainFooter}>

            <div className="container">
                <div className={style.row}>
                    <img className={style.logo} src="/appLogo.png" alt="footer logo" />
                </div>
                <div className={style.row}>
                    <a href="https://www.facebook.com/login/"><img className={style.logo} src="/fb.png" alt="fb logo" /></a> 
                    <a href="https://www.instagram.com/accounts/login/"><img className={style.logo} src="/ig.png" alt="ig logo" /></a>
                    <a href="https://twitter.com/login"><img className={style.logo} src="/tw.png" alt="tw logo" /></a>
                </div>
                <hr />
                <div>
                    <p className={style.colSm}>
                        &copy;{new Date().getFullYear()} KARCHEV INC. | All rights reserved | Terms of service
                    </p>
                </div>
            </div>

        </div>
    );
};


export default Footer;