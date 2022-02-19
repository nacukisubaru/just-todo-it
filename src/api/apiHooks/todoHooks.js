import { useEffect, useCallback } from "react";
import TodoDataService from "../apiServices/todoService";
import { useDatabase } from ".";
import { setTodoList } from "../../redux/actions/todoAction";
import { useSelector, useDispatch } from "react-redux";
import { selectGroupId } from "../../redux/actions/groupAction";
import { setTodo } from "../../redux/actions/todoAction";
import { useGetSelectedGroupId } from "./groupHooks";
import { useGetGroupManager } from "./groupHooks";

export const useSetTodoListByGroup = (groupId) => {
    const state = useGetTodoList();
    const db = useDatabase();
    const dispatch = useDispatch();
    const importantGroupId = useGetGroupManager().importantGroupId;

    const getList = useCallback(
        async (groupId) => {
            let groupList = [];
            const todoService = new TodoDataService(db);
            if (importantGroupId === groupId) {
                groupList = await todoService.getListByImportant();
            } else {
                groupList = await todoService.getListByGroup(groupId);
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
        if (groupManager.importantGroupId !== null && groupManager.selectedGroupId == groupManager.importantGroupId) {
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

export const useGetTodoList = () => {
    return useSelector((state) => state.todoManager.todos);
};
