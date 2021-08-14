// import React from 'react';
import Svg from '../../sprite'
import c from './Header.module.css'

const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.container}>
                {/* <img src='https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png' alt='logo' /> */}
                <div className={c.logo}>
                    <img src="http://wpkixx.com/html/socimo/images/logo.png" alt="logo" />
                    <span>Socimo</span>
                </div>
                <div className={c.elements}>
                    <div className={c.searches}>
                        <form method='post'>
                            <input type="text" placeholder='Search...' />
                        </form>
                        <button type='submit'>
                            <Svg name='search' />
                        </button>
                        {/* <Svg name='search' /> */}
                        <span className={c.recentSearch}></span>
                    </div>
                    <ul className={c.webElements}>
                        <li className={c.userDp}>
                            <a href="/profile">
                                <img src="http://wpkixx.com/html/socimo/images/resources/user.jpg" alt="avatar" />
                                Georg Peter
                            </a>
                        </li>
                        <li className={c.home}>
                            <a href="/newsfeed">
                                <Svg name="home" />
                            </a>
                        </li>
                        <li className={c.messages}>
                            <a href="/messages">
                                <Svg name="messages" />
                            </a>
                        </li>
                        <li className={c.notifications}>
                            <a href="/notifications">
                                <Svg name="notifications" />
                            </a>
                        </li>
                        <li className={c.addNew}>
                            <a href="#">
                                <Svg name="addNew" />
                            </a>
                        </li>
                        <li className={c.dropdown}>
                            <a href="#">
                                <Svg name="dropdown" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </header>);
}

export default Header;