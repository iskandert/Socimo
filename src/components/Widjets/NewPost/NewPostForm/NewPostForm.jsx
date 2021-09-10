import React from 'react'
import c from './NewPostForm.module.css';
import c1 from '../../Widjet.module.css';
import Svg from '../../../../sprite';
import { addPostActionCreator, onChangePostTextActionCreator, onChangePostTopicActionCreator, setClassOnClick } from '../../../../redux/state';
// import Svg from '../../../../sprite';

const NewPostForm = (props) => {
    const state = props.state;
    const dispatch = props.dispatch;
    let newPostTextElement = React.createRef(), newPostTopicElement = React.createRef();
    let setClassToForm = setClassOnClick(`.${c.newPostForm}`, c.hide);
    let onChangePostTopic = () => {
        let text = newPostTopicElement.current.value;
        dispatch(onChangePostTopicActionCreator(text));
        // console.log(state.newPostTopic);
    }
    let onChangePostText = () => {
        let text = newPostTextElement.current.value;
        dispatch(onChangePostTextActionCreator(text));
        // console.log(state.newPostText);
    }
    let addPost = () => {
        dispatch(addPostActionCreator());
        // setClassToForm(`.${c.newPostForm}`, c.hide);
    }
    // let funks = () => {
    //     addPost();
    //     setClassToForm(`.${c.newPostForm}`, c.hide)();
    // }
    // let date = new Date();
    // console.log(date.toString());
    return (
        // <div className={`${c.wrapper} ${c.hide}`}>
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
                        ref={newPostTopicElement}
                        onChange={onChangePostTopic} />
                    <textarea
                        className={c.textOfPost}
                        placeholder="What's On Your Mind?"
                        value={state.newPostText}
                        ref={newPostTextElement}
                        onChange={onChangePostText} />
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
                        // type='submit'
                        // onClick={addPost}
                        onClick={() => {
                            addPost();
                            setClassToForm();
                        }}
                        className={c.publish}>
                        Publish
                    </div>
                </form>
            </div>
        </div>
        // {/* </div> */}
    )
}

export default NewPostForm;