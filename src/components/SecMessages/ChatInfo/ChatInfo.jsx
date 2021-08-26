import React from 'react';
import { NavLink } from 'react-router-dom';
import Svg from '../../../sprite';
import c1 from '../../Widjets/Widjet.module.css';
import c from './ChatInfo.module.css';

const ChatInfo = (props) => {
    const state = props.state;
    return (
        <div className={c.chatInfo}>
            <span className={c1.header}>
                <NavLink to='/messages' >
                    View all chats
                </NavLink>
            </span>
            <div className={c.infoHeader}>
                <div className>
                    <span>{state.name}</span>
                    <span>{state.country}</span>
                </div>
                <div className>
                    <button>
                        <Svg name='videophone' />
                    </button>
                    <button>
                        <Svg name='phone' />
                    </button>
                </div>
            </div>
            <div className={c.infoAvatar} >
                <img src={state.avatar} alt="avatar" />
            </div>
            <div className={c.infoData} >
                <span>Display Name</span>
                <span>{state.name.split(' ')[0]}</span>
                <span>Local Time</span>
                <span>{state.time}</span>
                <span>Email Addres</span>
                <span>{state.email}</span>
                <span>Phone Number</span>
                <span>{state.phone}</span>
                <span>Skype Id</span>
                <span>{state.skype}</span>
            </div>
            <div className>
                <NavLink to='#' >
                    View Profile
                </NavLink>
                <NavLink to='#' >
                    Block Chat
                </NavLink>
            </div>
        </div>

    )
}

export default ChatInfo;