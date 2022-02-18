import { SET_GROUPS, SELECT_GROUP, SET_GROUP } from "../reducers/groupReducer";
import GroupService from "../../api/apiServices/groupService";

export function setGroupsList(db) {
    return async (dispatch) => {
        const groupService = new GroupService(db);
        const groupList = await groupService.getList();
        dispatch({ type: SET_GROUPS, payload: groupList });
    };
}

export function setGroup(group) {
    return { type: SET_GROUP, payload: group };
}

export function selectGroupId(groupId) {
    return { type: SELECT_GROUP, payload: groupId };
}
