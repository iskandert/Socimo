const ON_CHANGE_POST_TOPIC = 'ON-CHANGE-POST-TOPIC';
const ON_CHANGE_POST_TEXT = 'ON-CHANGE-POST-TEXT';
const ADD_POST = 'ADD-POST';

export const addPostActionCreator = () => ({
    type: ADD_POST,
});
export const onChangePostTopicActionCreator = (t) => {
    return {
        type: ON_CHANGE_POST_TOPIC,
        text: t,
    }
};
export const onChangePostTextActionCreator = (t) => {
    return {
        type: ON_CHANGE_POST_TEXT,
        text: t,
    }
};

const profileReducer = (state, action) => {

    switch (action.type) {
        case ON_CHANGE_POST_TOPIC:
            state.newPostTopic = action.text;
            return state;
        case ON_CHANGE_POST_TEXT:
            state.newPostText = action.text;
            return state;
        case ADD_POST:
            if (state.newPostText === '' || state.newPostTopic === '') return state;
            let dateArr = new Date().toString().split(' ');
            let newPost = {
                id: state.postData.length,
                name: "Georg Peter",
                action: "create post",
                date: `${dateArr[1]},${dateArr[2]} ${dateArr[3]}`,
                statistic: "0, 0, 0, 0",
                content: {
                    link: '',
                    captureLink: [],
                    pictures: [],
                    videos: [], //TODO
                    header: state.newPostTopic,
                    text: state.newPostText,
                }
            };
            state.postData.push(newPost);
            state.newPostText = '';
            state.newPostTopic = '';
            return state;
        default:
            return state;
    }
}

export default profileReducer;