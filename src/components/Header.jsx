// import React from 'react';
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
                        <button type='submit'></button>
                        <span className={c.recentSearch}></span>
                    </div>
                    <ul className={c.webElements}>
                        <li className={c.userDp}>+</li>
                        <li className={c.home}>+</li>
                        <li className={c.messages}>+</li>
                        <li className={c.notifications}>+</li>
                        <li className={c.addNew}>+</li>
                        <li className={c.dropdown}>+</li>
                    </ul>
                </div>
            </div>

        </header>);
}

export default Header;