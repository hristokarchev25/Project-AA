import style from './Footer.module.css';


const Footer = () => {
    return (
        <div className={style.mainFooter}>
            <div className="container">
                <div className="row">
                    <div className={style.col}>
                        <h4>Header 1 INC.</h4>
                        <ul className="list-unstyled">
                            <li>088454546</li>
                            <li>Kz BG</li>
                            <li>Iztok 24 a</li>
                        </ul>
                    </div>
                    
                    <div className={style.col}>
                        <h4>Header 2.</h4>
                        <ul className="list-unstyled">
                            <li>MEsfsas</li>
                            <li>sdsaff</li>
                            <li>Iztok</li>
                        </ul>
                    </div>
                    
                    <div className={style.col}>
                        <h4>Header 3.</h4>
                        <ul className="list-unstyled">
                            <li>088454546</li>
                            <li> BG</li>
                            <li> 24 a</li>
                        </ul>
                    </div>

                </div>
                <hr/>
                <div className={style.row}>
                    <p className={style.colSm}>
                        &copy;{new Date().getFullYear()} KARCHEV INC. | All right reserved | Terms of service
                    </p>
                </div>
            </div>
          
        </div>
    );
};


export default Footer;