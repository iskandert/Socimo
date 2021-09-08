import React from 'react';
import NewPost from '../../Widjets/NewPost/NewPost';
import Post from '../../Widjets/Post/Post';
import c from './Posts.module.css';

const Posts = (props) => {
    let postElements = props.state.postData.reverse().map(item => <Post
        name={item.name}
        action={item.action}
        date={item.date}
        statistic={item.statistic}
        content={item.content}
        avatar={props.state.profileInfo.avatar}
    />);
    console.log(props.state.postData.reverse());
    console.log(props.state.postData);
    return (
        <div className={c.posts}>
            <NewPost />
            {postElements}
        </div>
    );
}

export default Posts;