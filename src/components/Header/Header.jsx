// import React from 'react';
import c from './Header.module.css'
import Logo from './Logo/Logo';
import Searches from './Searches/Searches';
import WebElements from './WebElements/WebElements';

let setClass = () => {
    let elem = document.querySelectorAll(`.appWrapper > header:first-child`)[0];
    let strActive = c.active;
    if ((window.scrollY > 0 && !elem.classList.contains(strActive)) || (window.scrollY === 0 && elem.classList.contains(strActive))) {
        elem.classList.toggle(strActive);
    }
}

const Header = () => {
    return (
        <header className={c.header}>
            < Logo />
            <div className={c.elements}>
                <Searches />
                <WebElements />
            </div>
            {window.addEventListener('scroll', setClass)}
        </header >);
}

export default Header;