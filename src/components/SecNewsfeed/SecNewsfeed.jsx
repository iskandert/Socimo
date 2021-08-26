// import React from 'react';
// import Block from './Block/Block';
import Block from '../Widjets/Block/Block';
// import Posts from './Posts/Posts';
// import Profile from './Profile/Profile';
import c from './SecNewsfeed.module.css';

const SecNewsfeed = () => {
    return (
        <main className={c.main}>
            <div className={c.aside1}>
                <Block />
            </div>
            <div className={c.content}>
                <Block />
            </div>
            <div className={c.aside2}>
                <Block />
            </div>
        </main>);
}

export default SecNewsfeed;