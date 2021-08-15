// import React from 'react';
import AvaButton from './AvaButton/AvaButton';
import HeadButton from './HeadButton/HeadButton';
import c from './WebElements.module.css';


const WebElements = () => {
    return (
        <div className={c.webElements}>
            <AvaButton />
            <HeadButton addres='/newsfeed' name='home' />
            <HeadButton addres='/messages' name='messages' />
            <HeadButton addres='/notifications' name='notifications' />
            <HeadButton addres='#' name='addNew' />
            <HeadButton addres='#' name='dropdown' />
        </div>
    );
}

export default WebElements;