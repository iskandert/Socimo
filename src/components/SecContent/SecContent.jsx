// import React from 'react';
import Block from '../Widjets/Block/Block';
import Posts from './Posts/Posts';
import PostsContainer from './Posts/PostsContainer';
import Profile from './Profile/Profile';
import c from './SecContent.module.css';

const SecContent = (props) => {
    // const state = props.state;
    // const dispatch = props.dispatch;
    return (
        <main className={c.main}>
            <div className={c.aside1}>
                <Block />
                <Block />
                <Block />
                <Block />
            </div>
            <Profile state={props.state} />
            <PostsContainer store={props.store} />
            <div className={c.aside2}>
                <Block />
                <Block />
                <Block />
                <Block />
            </div>
        </main>);
}

export default SecContent;