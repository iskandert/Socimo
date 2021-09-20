
let initialState = {
    follInfo: { rate: "4", count: "101" },
    // follInfo: store._state.profilePage.profileInfo.followers,
};

const secNavReducer = (state = initialState, action) => {

    switch (action.type) {
        case '':
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default secNavReducer;