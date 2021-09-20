import { connect } from 'react-redux';
import { onJoinedActionCreator } from '../../../redux/groupsReducer';
// import { } from '../../../../redux/profileReducer';
import ReferExemp from './ReferExemp';

let mapStateToProps = (state, props) => {
    return {
        // newPostTopic: state.profilePage.newPostTopic,
        // newPostText: state.profilePage.newPostText,
        joined: props.data.joined,
        avatar: props.data.avatar,
        name: props.data.name,
        membersCount: props.data.membersCount,
        // state: props.data.data,
    }
}

let mapDispatchToProps = (dispatch, props) => {
    return {
        onJoined: () => {
            dispatch(onJoinedActionCreator(props.data.id))
        }
    }
}

const ReferExempContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReferExemp);

export default ReferExempContainer;