import { useEffect, useCallback } from "react";
import TodoDataService from "../apiServices/todoService";
import { useDatabase } from ".";
import { setTodoList } from "../../redux/actions/todoAction";
import { useSelector, useDispatch } from "react-redux";
import { selectGroupId } from "../../redux/actions/groupAction";
import { setTodo } from "../../redux/actions/todoAction";
import { useGetSelectedGroupId } from "./groupHooks";
import { useGetGroupManager } from "./groupHooks";
import { changeTabFilterCode } from "../../redux/actions/appAction";

export const useSetTodoListByGroup = (groupId) => {
    const state = useGetTodoList();
    const db = useDatabase();
    const dispatch = useDispatch();
    const importantGroupId = useGetGroupManager().importantGroupId;

    const getList = useCallback(
        async (groupId, tabFilterCode = "notComplete") => {
            let isComplete = tabFilterCode === 'complete' ? true : false;
            let groupList = [];
            const todoService = new TodoDataService(db);
            if (importantGroupId === groupId) {
                groupList = await todoService.getListByImportant();
            } else {
                if(tabFilterCode == "important") {
                    groupList = await todoService.getListByImportantAndGroup(groupId);
                } else {
                    groupList = await todoService.getListByCompleteAndGroup(
                        isComplete,
                        groupId
                    );
                }
            }
            dispatch(setTodoList(groupList));
            dispatch(selectGroupId(groupId));
            return groupList;
        },
        [db, dispatch]
    );

    useEffect(() => {
        if (groupId) {
            getList(groupId);
        }
    }, [getList, groupId]);

    return {
        state,
        getList,
    };
};

export const useAddTodo = () => {
    const state = useGetTodoList();
    const dispatch = useDispatch();
    const db = useDatabase();
    const groupId = useGetSelectedGroupId();

    const addTodo = async (todoName) => {
        const todoService = new TodoDataService(db);
        const todo = {
            title: todoName,
            description: "",
            isComplete: false,
            isImportant: false,
            points: 0,
            timer: 0,
            groupId: groupId,
            userId: "4221",
        };

        const result = await todoService.add(todo);
        todo.id = result.id;
        dispatch(setTodo(todo));
    };

    return {
        state,
        addTodo,
    };
};

export const useSetComplete = () => {
    const db = useDatabase();
    const state = useGetTodoList();
    const dispatch = useDispatch();

    const changeComplete = async (todoId) => {
        let currentTodo = {};
        if (state.length > 0) {
            const todoState = state.map((todo) => {
                if (todo.id === todoId) {
                    currentTodo = todo;
                }
                return todo;
            });
            const isComplete = !currentTodo.isComplete;
            todoState.map((todo, index) => {
                if (todo.id === todoId) {
                    todoState[index].isComplete = isComplete;
                }
                return todo;
            });

            const todoService = new TodoDataService(db, todoId);
            await todoService.changeComplete(isComplete);
            dispatch(setTodoList(todoState));
        }
    };

    return {
        changeComplete,
    };
};

export const useChangeTodoImportant = () => {
    const db = useDatabase();
    const todos = useGetTodoList();
    const dispatch = useDispatch();
    let currentTodo = {};

    const updateImportant = async (todoId) => {
        const todoList = todos.map((todo) => {
            if (todo.id === todoId) {
                currentTodo = todo;
            }
            return todo;
        });
        const isImportant = !currentTodo.isImportant;
        const todoListNewState = todoList.map((todo) => {
            if (todo.id == todoId) {
                todo.isImportant = isImportant;
            }
            return todo;
        });

        const todoService = new TodoDataService(db, todoId);
        todoService.changeImportant(isImportant);
        
        dispatch(setTodoList(todoListNewState));
    };

    return {
        todos,
        updateImportant,
    };
};

export const useFilterTodoListByImportant = () => {
    const todos = useGetTodoList();
    const dispatch = useDispatch();
    const groupManager = useGetGroupManager();

    let todoList = [];

    const filter = () => {
        if (
            groupManager.importantGroupId !== null &&
            groupManager.selectedGroupId == groupManager.importantGroupId
        ) {
            todos.map((todo) => {
                if (todo.isImportant === true) {
                    todoList.push(todo);
                }
            });
            dispatch(setTodoList(todoList));
        }
    };

    return {
        filter,
    };
};

export const useDeleteTodo = () => {
    const db = useDatabase();
    const dispatch = useDispatch();
    const todos = useGetTodoList();
    let todoList = [];

    const remove = (todoId) => {
        const todoService = new TodoDataService(db, todoId);
        todoService.delete();
        todos.map((todo) => {
            if (todo.id != todoId) {
                todoList.push(todo);
            }
        });
        dispatch(setTodoList(todoList));
    };

    return { remove };
};

export const useFilterByCompletedTodos = () => {
    const dispatch = useDispatch();
    const db = useDatabase();
    const getSelectedGroupId = useGetSelectedGroupId();

    const filter = async (isComplete = false) => {
        const todoService = new TodoDataService(db);
        const result = await todoService.getListByCompleteAndGroup(
            isComplete,
            getSelectedGroupId
        );
        dispatch(setTodoList(result));
        let filterCode = isComplete === true ? "complete" : "notComplete";
        dispatch(changeTabFilterCode(filterCode));
    };

    return { filter };
};

export const useFilterByImportantAndGrouptTodos = () => {
    const dispatch = useDispatch();
    const db = useDatabase();
    const getSelectedGroupId = useGetSelectedGroupId();

    const filter = async () => {
        const todoService = new TodoDataService(db);
        const result = await todoService.getListByImportantAndGroup(
            getSelectedGroupId
        );
        dispatch(setTodoList(result));
        dispatch(changeTabFilterCode("important"));
    };

    return { filter };
};

export const useGetTodoList = () => {
    return useSelector((state) => state.todoManager.todos);
};
