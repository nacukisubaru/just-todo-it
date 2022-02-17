import { SET_TODO_LIST } from "../reducers/todoReducer";

export function setTodoList(groupList) {
    return { type: SET_TODO_LIST, payload: groupList}
}