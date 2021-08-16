import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = (props) => {
    let postElements = props.data.map(item => <Post
        name={item.name}
        action={item.action}
        date={item.date}
        statistic={item.statistic}
    />);
    return (
        <div className={c.posts}>
            <NewPost />
            {postElements}
        </div>
    );
}

export default Posts;