export const FIREBASE_MANAGER = "FB/FIREBASE_MANAGER";

const initialState = {
    db: {},
};

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIREBASE_MANAGER:
            return { ...state, db: action.payload };
        default:
            return state;
    }
};
