import { SET_GROUPS } from "../reducers/groupReducer";
import GroupService from "../../api/apiServices/groupService";

export function setGroupsList(db) {
    return async dispatch => {
        const groupService = new GroupService(db);
        const groupList = await groupService.getList();
        dispatch({ type: SET_GROUPS, payload: groupList}); 
    }
}
