export const SHOW_BTN_ADD_GROUP = "SHOW/SHOW_BTN_ADD_GROUP";

const initialState = {
    showBtnAddGroup: true,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_BTN_ADD_GROUP:
            return { ...state, showBtnAddGroup: action.payload };
        default:
            return state;
    }
};
