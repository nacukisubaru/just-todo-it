export const SET_TODO_LIST = "TODO/SET_TODO";

const initialState = {
    todos: {},
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_LIST:
            return { ...state, todos: action.payload };
        default:
            return state;
    }
};
