import { SHOW_BTN_ADD_GROUP, OPEN_GROUP_MENU } from "../reducers/appReducer";

export function toggleBtnAddGroup(isShow) {
    return { type: SHOW_BTN_ADD_GROUP, payload: isShow };
}

export function toggleGroupMenu(isOpen) {
    return { type: OPEN_GROUP_MENU, payload: isOpen };
}