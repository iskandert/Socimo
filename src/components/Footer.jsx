import c from './Footer.module.css';

const Footer = () => {
    return (
        <div className={c.footer}>
            <div className={c.btts}>
                <div className={c.bag}></div>
                <div className={c.chat}></div>
            </div>
            <div className={c.img}></div>
            <div className={c.copyright}>copyright</div>
        </div>);
}

export default Footer;