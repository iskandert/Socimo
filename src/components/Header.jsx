// import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <div className="header_container">
                {/* <img src='https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png' alt='logo' /> */}
                <div className='logo'>
                    <img src="http://wpkixx.com/html/socimo/images/logo.png" alt="logo" />
                    <span>Socimo</span>
                </div>
                <div className="header_elements">
                    <div className='searches'>
                        <form method='post'>
                            <input type="text" placeholder='Search...' />
                        </form>
                        <button type='submit'></button>
                        <span className='recent-search'></span>
                    </div>
                    <ul className='web-elements'>
                        <li className='user-dp'>+</li>
                        <li className='home'>+</li>
                        <li className='messages'>+</li>
                        <li className='notifications'>+</li>
                        <li className='add-new'>+</li>
                        <li className='dropdown'>+</li>
                    </ul>
                </div>
            </div>

        </header>);
}

export default Header;