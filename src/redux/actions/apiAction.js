import { FIREBASE_MANAGER } from "../reducers/apiReducer"

export function apiManager(db) {
    return {type: FIREBASE_MANAGER, payload: db}
}