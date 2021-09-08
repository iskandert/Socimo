// import React from 'react';
import Block from '../Widjets/Block/Block';
import Posts from './Posts/Posts';
import Profile from './Profile/Profile';
import c from './SecContent.module.css';

const SecContent = (props) => {
    const state = props.state;
    return (
        <main className={c.main}>
            <div className={c.aside1}>

                <Block />
                <Block />
                <Block />
                <Block />
            </div>
            <Profile state={state} />
            <Posts state={state} />
            <div className={c.aside2}>
                <Block />
                <Block />
                <Block />
                <Block />
            </div>
        </main>);
}

export default SecContent;