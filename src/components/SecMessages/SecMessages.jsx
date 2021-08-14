// import React from 'react';
// import Block from './Block/Block';
import Block from '../SecContent/Block/Block';
// import Posts from './Posts/Posts';
// import Profile from './Profile/Profile';
import c from './SecMessages.module.css';

const SecMessages = () => {
    return (
        <main className={c.main}>
            <div className={c.aside1}>
                <Block />
            </div>
            <div className={c.aside}>
                <Block />
            </div>
        </main>);
}

export default SecMessages;