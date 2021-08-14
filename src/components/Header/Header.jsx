// import React from 'react';
import { NavLink } from 'react-router-dom';
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
                            <NavLink to="/profile">
                                <img src="http://wpkixx.com/html/socimo/images/resources/user.jpg" alt="avatar" />
                                Georg Peter
                            </NavLink>
                        </li>
                        <li className={c.home}>
                            <NavLink to="/newsfeed">
                                <Svg name="home" />
                            </NavLink>
                        </li>
                        <li className={c.messages}>
                            <NavLink to="/messages">
                                <Svg name="messages" />
                            </NavLink>
                        </li>
                        <li className={c.notifications}>
                            <NavLink to="/notifications">
                                <Svg name="notifications" />
                            </NavLink>
                        </li>
                        <li className={c.addNew}>
                            <NavLink to="#">
                                <Svg name="addNew" />
                            </NavLink>
                        </li>
                        <li className={c.dropdown}>
                            <NavLink to="#">
                                <Svg name="dropdown" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </header>);
}

export default Header;