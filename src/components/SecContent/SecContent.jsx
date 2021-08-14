// import React from 'react';
import Block from './Block/Block';
import Posts from './Posts/Posts';
import Profile from './Profile/Profile';
import c from './SecContent.module.css';

const SecContent = () => {
    return (
        <main className={c.main}>
            <div className={c.aside1}>
                <Block />
                <Block />
                <Block />
                <Block />
            </div>
            <Profile />
            <Posts />
            <div className={c.aside2}>
                <Block />
                <Block />
                <Block />
                <Block />
            </div>
        </main>);
}

export default SecContent;