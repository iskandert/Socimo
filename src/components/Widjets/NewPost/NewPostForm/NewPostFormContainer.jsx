import React from 'react'
import { connect } from 'react-redux';
import { addPostActionCreator, onChangePostTextActionCreator, onChangePostTopicActionCreator } from '../../../../redux/profileReducer';
import StoreContext from '../../../../storeContext';
import NewPostForm from './NewPostForm';

let mapStateToProps = (state) => {
    return {
        newPostTopic: state.profilePage.newPostTopic,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangePostTopic: (e) => {
            let text = e.target.value;
            dispatch(onChangePostTopicActionCreator(text));
        },
        onChangePostText: (e) => {
            let text = e.target.value;
            dispatch(onChangePostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
}

const NewPostFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPostForm);

export default NewPostFormContainer;