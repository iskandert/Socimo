import React from 'react'

import c from './NewPost.module.css';
// import c1 from '../../SecContent/SecContent.module.css';
import c1 from '../Widjet.module.css';
import Svg from '../../../sprite';
// import { render } from 'react-dom';

const NewPostButton = (props) => {
    return (
        <div className={c[props.name]}>
            <Svg name={props.name} />
            <span>{props.title}</span>
        </div>
    );
}

const NewPost = (props) => {
    return (
        <div className={c1.widjet}>
            {/* <div className={c1.widjetWrapper}> */}
            <span className={c1.header}>Create New Post</span>
            <div className={c1.body}>
                {/* <input className={c.create} type="text" placeholder="Create New Post" /> */}
                <button className={c.create} type={c.submit}>
                    <Svg name='pen' />
                    Create New Post
                </button>
                <div className={c.buttons}>
                    <NewPostButton name='capture' title='Photo/Video' />
                    <NewPostButton name='smile' title='Feeling/Activity' />
                    <NewPostButton name='liveStream' title='Live Stream' />
                </div>
            </div>
            {/* </div> */}
            {/* <NewPostButton /> */}
        </div>
    );
}

export default NewPost;