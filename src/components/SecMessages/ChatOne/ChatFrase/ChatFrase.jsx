import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './ChatFrase.module.css';

const ChatFrase = (props) => {
    let isMy = () => {
        if (props.isMy) return c.my
        return c.notMy
    }
    return (
        <div className={`${c.frase} ${isMy()}`}>
            <div className={c.ava}>
                <NavLink to={props.refer} >
                    <img src={props.imgRef} alt="avatar" />
                </NavLink>
            </div>
            <div className={c.textBlock}>
                <span>{`${props.text}`}</span>
            </div>
        </div>
    )
}

export default ChatFrase;