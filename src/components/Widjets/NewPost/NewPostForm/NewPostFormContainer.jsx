import React from 'react'
import { addPostActionCreator, onChangePostTextActionCreator, onChangePostTopicActionCreator } from '../../../../redux/profileReducer';
import NewPostForm from './NewPostForm';

const NewPostFormContainer = (props) => {
    const state = props.store.getState();
    const dispatch = props.store.dispatch;
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
        <NewPostForm
            onChangePostTopic={onChangePostTopic}
            onChangePostText={onChangePostText}
            addPost={addPost}
            newPostTopic={state.newPostTopic}
            newPostText={state.newPostText}
        />
    )
}

export default NewPostFormContainer;