import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = () => {
    return (
        <div className={c.posts}>
            <NewPost />
            <Post
                name="Georg Peter"
                action="added image album"
                date="Jul,22 2021"
                statistic="1.2k, 54, 5k, 205"
            />
            <Post
                name="Georg Peter"
                action="shared link"
                date="Oct,3 2020"
                statistic="0.8k, 71, 4.2k, 198"
            />
            <Post
                name="Georg Peter"
                action="create post"
                date="Sep,15 2020"
                statistic="0.9k, 47, 3.8k, 176"
            />
        </div>
    );
}

export default Posts;