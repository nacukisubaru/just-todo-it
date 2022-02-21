export const SHOW_BTN_ADD_GROUP = "SHOW/SHOW_BTN_ADD_GROUP";
export const OPEN_GROUP_MENU = "OPEN/OPEN_GROUP_MENU";
export const CHANGE_TAB_FILTER_CODE = "TAB/CHANGE_TAB_FILTER_CODE";

const initialState = {
    showBtnAddGroup: true,
    groupMenu: {isOpen:false, groupId: ''},
    tabFilterCode: 'notComplete'
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_BTN_ADD_GROUP:
            return { ...state, showBtnAddGroup: action.payload };
        case OPEN_GROUP_MENU:
            return { ...state, groupMenu: action.payload };
        case CHANGE_TAB_FILTER_CODE:
            return { ...state, tabFilterCode: action.payload };
        default:
            return state;
    }
};
