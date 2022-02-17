import { combineReducers } from "redux";
import { apiReducer } from "./apiReducer";
import { groupReducer } from "./groupReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
    apiManager: apiReducer,
    groupManager: groupReducer,
    todoManager: todoReducer
});
