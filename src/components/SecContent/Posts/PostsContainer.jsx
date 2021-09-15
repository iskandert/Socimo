import StoreContext from "../../../storeContext";
import Posts from "./Posts"

const PostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                return <Posts
                    store={store}
                    state={store.getState().profilePage}
                />
            }}
        </StoreContext.Consumer>
    )
}

export default PostsContainer;