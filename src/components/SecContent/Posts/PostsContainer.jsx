import Posts from "./Posts"

const PostsContainer = (props) => {
    return (
        <Posts
            store={props.store}
            state={props.store.getState().profilePage}
        />
    )
}

export default PostsContainer;