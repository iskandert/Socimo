import React from 'react';
import { setClassFromScroll } from '../../redux/reduxStore';
import Svg from '../../sprite';
import c from './Footer.module.css';

const Footer = (props) => {

    let setClassScrollUp = setClassFromScroll;
    React.useEffect(() => {
        let body = document.querySelectorAll('body')[0];
        body.addEventListener('scroll', setClassScrollUp('*[class *= "Footer_scrollUp"]', c.scrolled, 150));
    });
    let scrollUp = () => {
        document.querySelectorAll('body')[0].scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className={c.footer}>
            <div className={c.btts}>
                <div className={c.bag}>
                    <Svg name='shoppingCard' />
                </div>
                <div className={c.chat}>
                    <Svg name='chats' />
                </div>
                <div
                    className={c.scrollUp}
                    onClick={scrollUp}
                // ref={scrollUpElement} 
                >
                    <Svg name='scrollUp' />
                </div>
            </div>
            <div className={c.background}>
                <img src="https://wpkixx.com/html/socimo/images/footer.png" alt="background" />
            </div>
            <div className={c.copyright}><span>@ Place for copyright 2021</span></div>
            {/* {window.addEventListener('scroll', setClassScrollUp)} */}
        </div>);
}

export default Footer;