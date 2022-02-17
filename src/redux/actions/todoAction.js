import { SET_TODO_LIST, SET_TODO } from "../reducers/todoReducer";

export function setTodoList(groupList) {
    return { type: SET_TODO_LIST, payload: groupList}
}

export function setTodo(todo) {
    return {type: SET_TODO, payload: todo};
}