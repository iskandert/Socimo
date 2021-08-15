// import React from 'react';
import c from './Header.module.css'
import Logo from './Logo/Logo';
import Searches from './Searches/Searches';
import WebElements from './WebElements/WebElements';

const Header = () => {
    return (
        <header className={c.header}>
            <Logo />
            <div className={c.elements}>
                <Searches />
                <WebElements />
            </div>
        </header>);
}

export default Header;