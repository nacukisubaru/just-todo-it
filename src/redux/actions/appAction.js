import {
    SHOW_BTN_ADD_GROUP,
    OPEN_GROUP_MENU,
    CHANGE_TAB_FILTER_CODE,
    OPEN_EDIT_GROUP_FIELD,
} from "../reducers/appReducer";

export function toggleBtnAddGroup(isShow) {
    return { type: SHOW_BTN_ADD_GROUP, payload: isShow };
}

export function toggleGroupMenu(stateGroupMenu) {
    return { type: OPEN_GROUP_MENU, payload: stateGroupMenu };
}

export function changeTabFilterCode(code) {
    return { type: CHANGE_TAB_FILTER_CODE, payload: code };
}

export function changeEditGroupField(groupField) {
    return { type: OPEN_EDIT_GROUP_FIELD, payload: groupField };
}