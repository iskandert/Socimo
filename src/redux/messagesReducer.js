const ADD_FRASE = 'ADD-FRASE';
const ON_CHANGE_FRASE = 'ON-CHANGE-FRASE';

export const addFraseActionCreator = (n) => ({
    type: ADD_FRASE,
    num: n,
});

export const onChangeFraseActionCreator = (t) => {
    return {
        type: ON_CHANGE_FRASE,
        text: t,
    }
};

const messagesReducer = (state, action) => {

    switch (action.type) {
        case ADD_FRASE:
            if (state.newFraseText === '') return state;
            let newFrase = {
                isMy: true,
                text: state.newFraseText,
            };
            state.messages[action.num].messages.push(newFrase);
            state.newFraseText = '';
            return state;
        case ON_CHANGE_FRASE:
            state.newFraseText = action.text;
            return state;
        default:
            return state;
    }
}

export default messagesReducer;