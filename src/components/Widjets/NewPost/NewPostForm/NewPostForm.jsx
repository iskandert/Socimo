import React from 'react'
import c from './NewPostForm.module.css';
import c1 from '../../Widjet.module.css';
import Svg from '../../../../sprite';
import { addPostActionCreator, onChangePostTextActionCreator, onChangePostTopicActionCreator } from '../../../../redux/profileReducer';
import { setClassOnClick } from '../../../../redux/store';

const NewPostForm = (props) => {
    const state = props.state;
    const dispatch = props.dispatch;
    // let newPostTextElement = React.createRef(), newPostTopicElement = React.createRef();
    let setClassToForm = setClassOnClick(`.${c.newPostForm}`, c.hide);
    let onChangePostTopic = (e) => {
        let text = e.target.value;
        // let text = newPostTopicElement.current.value;
        dispatch(onChangePostTopicActionCreator(text));
    }
    let onChangePostText = (e) => {
        let text = e.target.value;
        // let text = newPostTextElement.current.value;
        dispatch(onChangePostTextActionCreator(text));
    }
    let addPost = () => {
        dispatch(addPostActionCreator());
    }
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
                        value={state.newPostTopic}
                        // ref={newPostTopicElement}
                        onChange={props.onChangePostTopic} />
                    <textarea
                        className={c.textOfPost}
                        placeholder="What's On Your Mind?"
                        value={state.newPostText}
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