import React from 'react'
import { combineReducers, createStore } from 'redux';
import groupsReducer from './groupsReducer';
import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import secNavReducer from './secNavReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    secNavPart: secNavReducer,
    groupsPage: groupsReducer,
});

export const setClassFromScroll = (select, className, h) => {
    return function () {
        let elem = document.querySelectorAll(select)[0];
        let top = document.querySelectorAll('.appWrapper')[0].getBoundingClientRect().top;
        let isContein = elem.classList.contains(className);
        if ((top < -h && !isContein) || (top >= -h && isContein)) {
            elem.classList.toggle(className);
        }
    }
}

export const setClassOnEvent = (select, className) => {
    return function () {
        let elem = document.querySelectorAll(select)[0];
        elem.classList.toggle(className);
        // console.log(elem.classList);
    }
}

let store = createStore(reducers);

window.store = store;
export default store;