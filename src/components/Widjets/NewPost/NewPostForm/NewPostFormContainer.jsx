import React from 'react'
import c from './NewPostForm.module.css';
import c1 from '../../Widjet.module.css';
import Svg from '../../../../sprite';
import { addPostActionCreator, onChangePostTextActionCreator, onChangePostTopicActionCreator } from '../../../../redux/profileReducer';
import { setClassOnClick } from '../../../../redux/store';
import NewPost from '../NewPost';

const NewPostFormContainer = (props) => {
    const state = props.state;
    const dispatch = props.dispatch;
    let onChangePostTopic = (e) => {
        let text = e.target.value;
        dispatch(onChangePostTopicActionCreator(text));
    }
    let onChangePostText = (e) => {
        let text = e.target.value;
        dispatch(onChangePostTextActionCreator(text));
    }
    let addPost = () => {
        dispatch(addPostActionCreator());
    }
    return (
        <NewPost
            onChangePostTopic={onChangePostTopic}
            onChangePostText={onChangePostText}
            addPost={addPost}
            state={state}
        />
    )
}

export default NewPostFormContainer;