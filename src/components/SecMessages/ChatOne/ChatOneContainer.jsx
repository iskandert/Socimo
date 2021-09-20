import React from 'react';
import { connect } from 'react-redux';
import { addFraseActionCreator, onChangeFraseActionCreator } from '../../../redux/messagesReducer';
import ChatOne from './ChatOne';

let mapStateToProps = (state, props) => {
    return {
        messages: state.messagesPage.messages[props.item.id - 1],
        friends: state.messagesPage.friends[props.item.id - 1],
        newFraseText: state.messagesPage.newFraseText,
        // newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch, props) => {
    return {
        addFrase: () => {
            dispatch(addFraseActionCreator(props.item.id - 1));
        },
        onChangeFrase: (e) => {
            let text = e.target.value;
            dispatch(onChangeFraseActionCreator(text));
        },
    }
}

const ChatOneContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(ChatOne);

export default ChatOneContainer;