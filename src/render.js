import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { addFrase } from './redux/state';



export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
            // addFrase={addFrase}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}