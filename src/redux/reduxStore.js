// let store = createStore()
import React from 'react'
import { combineReducers, createStore } from 'redux';
import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import secNavReducer from './secNavReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    secNavPart: secNavReducer,
});

let store = createStore(reducers);

export default store;