export const SET_GROUPS = "GROUP/SET_GROUPS";
export const SELECT_GROUP = "GROUP/SELECT/GROUP";

const initialState = {
    groups: {},
    selectedGroupId: {},
};

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GROUPS:
            return { ...state, groups: action.payload };
        case SELECT_GROUP:
            return { ...state, selectedGroupId: action.payload };
        default:
            return state;
    }
};
