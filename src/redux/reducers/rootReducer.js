import { combineReducers } from "redux";
import { apiReducer } from "./apiReducer";
import { appReducer } from "./appReducer";
import { groupReducer } from "./groupReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
    apiManager: apiReducer,
    groupManager: groupReducer,
    todoManager: todoReducer,
    appManager: appReducer
});
