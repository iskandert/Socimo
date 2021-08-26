import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './ChatRef.module.css';
import c1 from '../SecMessages.module.css';

const ChatRef = (props) => {
    const state = props.state;
    return (
        <div className={c.chatRef}>
            <NavLink to={"/messages/" + state.id} activeClassName={c.active} >
                <div className={c1[state.status]}></div>
                <img src={state.avatar} alt="avatar" />
                <span className={c.name}>{state.name.split(' ')[0]}</span>
            </NavLink>
        </div>
    )
}

export default ChatRef;