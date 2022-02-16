export const SET_GROUPS = "GROUP/SET_GROUPS";

const initialState = {
    groups: {},
};

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GROUPS:
            return { ...state, groups: action.payload };
        default:
            return state;
    }
};
