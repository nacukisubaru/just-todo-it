export const SHOW_BTN_ADD_GROUP = "SHOW/SHOW_BTN_ADD_GROUP";
export const OPEN_GROUP_MENU = "OPEN/OPEN_GROUP_MENU";

const initialState = {
    showBtnAddGroup: true,
    groupMenu: {isOpen:false, groupId: ''}
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_BTN_ADD_GROUP:
            return { ...state, showBtnAddGroup: action.payload };
        case OPEN_GROUP_MENU:
            return { ...state, groupMenu: action.payload };
        default:
            return state;
    }
};
