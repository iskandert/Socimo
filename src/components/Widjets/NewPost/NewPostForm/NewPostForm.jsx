import React from 'react'
import c from './NewPostForm.module.css';
import c1 from '../../Widjet.module.css';
import Svg from '../../../../sprite';
import { setClassOnEvent } from '../../../../redux/reduxStore';

const NewPostForm = (props) => {
    let setClassToForm = setClassOnEvent(`.${c.newPostForm}`, c.hide);
    return (
        <div className={`${c.newPostForm} ${c.hide}`}>
            <div className={c.header}>
                <span>Create New Post</span>
                <div
                    onClick={setClassToForm}
                    className={c.close}>
                    <Svg name='close' />
                </div>
            </div>
            <div className={c.content}>
                <div className=""></div>
                <form method="post">
                    <input
                        type="text"
                        className={c.topicOfPost}
                        placeholder='Add Topic...'
                        value={props.newPostTopic}
                        // ref={newPostTopicElement}
                        onChange={props.onChangePostTopic} />
                    <textarea
                        className={c.textOfPost}
                        placeholder="What's On Your Mind?"
                        value={props.newPostText}
                        // ref={newPostTextElement}
                        onChange={props.onChangePostText} />
                    <div className={c.options}>
                        <ul>
                            <li className>Activity Feed</li>
                            <li className>My Story</li>
                        </ul>
                        <div className>
                            <Svg name='groups2' />
                            <span>Joined Groups</span>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            props.addPost();
                            setClassToForm();
                        }}
                        className={c.publish}>
                        Publish
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPostForm;