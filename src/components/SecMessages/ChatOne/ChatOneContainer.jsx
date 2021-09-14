import React from 'react';
import { addFraseActionCreator, onChangeFraseActionCreator } from '../../../redux/messagesReducer';
import ChatOne from './ChatOne';

const ChatOneContainer = (props) => {
    // debugger
    const item = props.item;
    const state = props.store.getState().messagesPage;
    const dispatch = props.store.dispatch;
    let friends = state.friends;
    let messages = state.messages;
    let addFrase = () => {
        dispatch(addFraseActionCreator(item.id - 1));
    }
    let onChangeFrase = (e) => {
        let text = e.target.value;
        dispatch(onChangeFraseActionCreator(text));
    }
    return (
        <ChatOne
            messages={messages[item.id - 1]}
            friends={friends[item.id - 1]}
            newFraseText={state.newFraseText}
            addFrase={addFrase}
            onChangeFrase={onChangeFrase} />
    )
}

export default ChatOneContainer;