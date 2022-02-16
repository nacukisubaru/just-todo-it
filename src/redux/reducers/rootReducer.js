import { combineReducers } from "redux";
import { apiReducer } from "./apiReducer";
import { groupReducer } from "./groupReducer";

export const rootReducer = combineReducers({
    apiManager: apiReducer,
    groupManager: groupReducer
});
