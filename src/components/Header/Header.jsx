import React from 'react';
import { setClassFromScroll } from '../../redux/store';
import c from './Header.module.css'
import Logo from './Logo/Logo';
import Searches from './Searches/Searches';
import WebElements from './WebElements/WebElements';

const Header = () => {
    // let headerElement = React.createRef();
    // let setClassHeader = () => {
    //     let elem = document.querySelectorAll(`.appWrapper > header:first-child`)[0];
    //     let wrap = document.querySelectorAll('.appWrapper')[0];
    //     let top = wrap.getBoundingClientRect().top;
    //     // console.log(body.getBoundingClientRect());
    //     // let elem = headerElement.current.classList;
    //     let strActive = c.active;
    //     if ((top < 0 && !elem.classList.contains(strActive)) || (top >= 0 && elem.classList.contains(strActive))) {
    //         // console.log('done');
    //         // console.log(elem.classList);
    //         elem.classList.toggle(strActive);
    //     }
    // }
    let setClassHeader = setClassFromScroll;
    React.useEffect(() => {
        let body = document.querySelectorAll('body')[0];
        // let f = () => { console.log('scrolled', body); }
        body.addEventListener('scroll', setClassHeader('.appWrapper > header:first-child', c.active, 0));
        // body.addEventListener('scroll', f);
    });

    // debugger;
    return (
        <header
            // ref={headerElement}
            className={c.header}>
            < Logo />
            <div className={c.elements}>
                <Searches />
                <WebElements />
            </div>
            {/* {window.addEventListener('scroll', setClass(headerElement, c.active, 0))} */}
            {/* {window.addEventListener('scroll', setClassHeader)} */}
        </header >);
}

export default Header;