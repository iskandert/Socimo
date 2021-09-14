import React from 'react';
import NewPost from '../../Widjets/NewPost/NewPost';
import Post from '../../Widjets/Post/Post';
import c from './Posts.module.css';

const Posts = (props) => {
    // const dispatch = props.dispatch;
    let postElements = props.state.postData.map(item => <Post
        name={item.name}
        action={item.action}
        date={item.date}
        statistic={item.statistic}
        content={item.content}
        avatar={props.state.profileInfo.avatar}
    />);
    // console.log(props.state.postData.reverse());
    // console.log(props.state.postData);
    return (
        <div className={c.posts}>
            <NewPost
                store={props.store} />
            {postElements.reverse()}
        </div>
    );
}

export default Posts;