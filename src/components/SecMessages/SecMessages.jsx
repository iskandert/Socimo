import React from 'react';
import { Route } from 'react-router-dom';
import c1 from '../Widjets/Widjet.module.css';
import ChatInfo from './ChatInfo/ChatInfo';
import ChatOne from './ChatOne/ChatOne';
import ChatRef from './ChatRef/ChatRef';
import c from './SecMessages.module.css';

const SecMessages = (props) => {
    // debugger;
    const state = props.state;
    const dispatch = props.dispatch;
    let friendsElements = state.friends.map(item => {
        return (
            <ChatRef
                state={item}
                dispatch={dispatch} />
        );
    });
    let chatElement = state.friends.map(item => {
        return (
            <Route
                path={'/messages/' + item.id}
                render={() => <ChatOne
                    state={state}
                    dispatch={dispatch}
                    messages={state.messages[item.id - 1]}
                    friends={state.friends[item.id - 1]}
                    addFrase={props.addFrase}
                    newFraseText={state.newFraseText} />} />
        );
    });
    let infoElement = state.friends.map(item => {
        return (
            <Route
                path={'/messages/' + item.id}
                render={() => <ChatInfo
                    state={state.friends[item.id - 1]}
                    dispatch={dispatch} />} />
        );
    });

    return (
        <main className={c.main}>
            <div className={c1.widjet}>
                <span className={c1.header1}>Messages</span>
                <Route
                    path='/messages' exact render={() => {
                        return (
                            <div className={c.chatsAll}>
                                {friendsElements}
                            </div>)
                    }} />
                <Route
                    path="/messages/(\d+)" render={() => {
                        return (
                            <div className={c.chats}>
                                {friendsElements}
                            </div>)
                    }} />
                {chatElement}
                {/* {scrollChatBody()} */}
            </div>
            <div className={c1.widjet}>
                <Route
                    path='/messages' exact render={() => {
                        return (
                            <div>
                                All chats
                            </div>)
                    }} />
                {infoElement}
            </div>

        </main>
    );
}

export default SecMessages;