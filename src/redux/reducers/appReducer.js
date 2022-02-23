export const SHOW_BTN_ADD_GROUP = "SHOW/SHOW_BTN_ADD_GROUP";
export const OPEN_GROUP_MENU = "OPEN/OPEN_GROUP_MENU";
export const CHANGE_TAB_FILTER_CODE = "TAB/CHANGE_TAB_FILTER_CODE";
export const OPEN_EDIT_GROUP_FIELD = "OPEN/OPEN_EDIT_GROUP_FIELD";

const initialState = {
    showBtnAddGroup: true,
    groupMenu: { isOpen: false, groupId: "" },
    tabFilterCode: "notComplete",
    editGroupNameField: { isOpen: false, groupId: "" },
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_BTN_ADD_GROUP:
            return { ...state, showBtnAddGroup: action.payload };
        case OPEN_GROUP_MENU:
            return { ...state, groupMenu: action.payload };
        case CHANGE_TAB_FILTER_CODE:
            return { ...state, tabFilterCode: action.payload };
        case OPEN_EDIT_GROUP_FIELD:
            return { ...state, editGroupNameField: action.payload };
        default:
            return state;
    }
};