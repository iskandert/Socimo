import React from 'react';
import { NavLink } from 'react-router-dom';
import Svg from '../../../sprite';
import ChatFrase from './ChatFrase/ChatFrase';
import c1 from '../SecMessages.module.css';
import c from './ChatOne.module.css';

const ChatOne = (props) => {
    // debugger
    let friends = props.friends;
    let messages = props.messages;
    let getStatus = (s) => {
        switch (s) {
            case 'online': return 'Online';
            case 'seenToday': return 'Last Seen On Today At ' + friends.seenTime;
            case 'offline': return 'Offline';
        }
    }
    let fraseElement = messages.messages.map(item => {
        let getAvatar = () => {
            if (item.isMy) return 'https://wpkixx.com/html/socimo/images/resources/userlist-2.jpg';
            return friends.avatar;
        }
        return (
            <ChatFrase
                isMy={item.isMy}
                refer='#'
                imgRef={getAvatar()}
                text={item.text}
            />
        );
    });
    let chatBody = React.createRef();
    let scrollChatBody = () => {
        chatBody.current.scrollTop = chatBody.current.scrollHeight;
    }
    // console.log(props.newFraseText);
    return (
        <div className={c.chatWrapper}>

            <div className={c.header}>
                <div className={c.nav}>
                    <div className={c.status}>
                        <div className={c1[friends.status]}></div>
                        <span>{getStatus(friends.status)}</span>
                    </div>
                    <div className={c.options}>
                        <NavLink to='#' >
                            <Svg name='more' />
                        </NavLink>
                    </div>
                </div>
                <span>{friends.lastDay}</span>
            </div>

            <div
                className={c.chatBody}
                ref={chatBody}>
                {fraseElement}
            </div>

            <div className={c.footer}>
                <button className={c.addFiles}>+</button>
                <form method='post'>
                    <input
                        type="text"
                        placeholder='say something...'
                        // ref={newFraseElement}
                        onChange={props.onChangeFrase}
                        value={props.newFraseText}
                    />
                </form>
                <button className={c.smiles}>
                    <Svg name='smile' />
                </button>
                <button
                    className={c.send}
                    onClick={() => {
                        props.addFrase();
                        scrollChatBody();
                    }}>
                    <Svg name='send' />
                </button>
            </div>

        </div>

    )
}

export default ChatOne;