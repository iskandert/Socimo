import { connect } from "react-redux";
import StoreContext from "../../../storeContext";
import Posts from "./Posts"

// const PostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 return <Posts
//                     store={store}
//                     state={store.getState().profilePage}
//                 />
//             }}
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state, props) => {
    return {
        state: state.profilePage,
        store: props.store,
    }
}

let mapDispatchToProps = () => {
    return {}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;