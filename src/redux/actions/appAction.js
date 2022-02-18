import { SHOW_BTN_ADD_GROUP } from "../reducers/appReducer";

export function toggleBtnAddGroup(isShow) {
    return { type: SHOW_BTN_ADD_GROUP, payload: isShow };
}