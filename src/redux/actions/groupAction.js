import {
    SET_GROUPS,
    SELECT_GROUP,
    SET_GROUP,
    SET_IMPORTANT_GROUP,
} from "../reducers/groupReducer";

export function setGroupsList(groupsList) {
   return { type: SET_GROUPS, payload: groupsList };
}

export function setGroup(group) {
    return { type: SET_GROUP, payload: group };
}

export function selectGroupId(groupId) {
    return { type: SELECT_GROUP, payload: groupId };
}

export function setImportantGroupId(groupId) {
    return { type: SET_IMPORTANT_GROUP, payload: groupId };
}
