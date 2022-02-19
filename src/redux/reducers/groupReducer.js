export const SET_GROUPS = "GROUP/SET_GROUPS";
export const SELECT_GROUP = "GROUP/SELECT/GROUP";
export const SET_GROUP = "GROUP/SET_GROUP";
export const SET_IMPORTANT_GROUP = "GROUP/SET_IMPORTANT_GROUP";

const initialState = {
    groups: {},
    selectedGroupId: null,
    importantGroupId: null
};

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GROUPS:
            return { ...state, groups: action.payload };
        case SELECT_GROUP:
            return { ...state, selectedGroupId: action.payload };
        case SET_GROUP:
            return { ...state, groups: state.groups.concat(action.payload) };
        case SET_IMPORTANT_GROUP:
            return {...state, importantGroupId: action.payload}
        default:
            return state;
    }
};
