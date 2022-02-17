import { useEffect, useCallback } from "react";
import TodoDataService from "../apiServices/todoService";
import { useDatabase } from ".";
import { setTodoList } from "../../redux/actions/todoAction";
import { useSelector, useDispatch } from "react-redux";
import { selectGroupId } from "../../redux/actions/groupAction";
import { setTodo } from "../../redux/actions/todoAction";
import { useGetSelectedGroupId } from "./groupHooks";

export const useSetTodoListByGroup = (groupId) => {
    const state = useGetTodoList();
    const db = useDatabase();
    const dispatch = useDispatch();

    const getList = useCallback(
        async (groupId) => {
            const todoService = new TodoDataService(db);
            const groupList = await todoService.getListByGroup(groupId);
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
            description: '',
            isComplete: false,
            isFavorite: false,
            points: 0,
            timer: 0,
            groupId: groupId,
            userId: '4221',    
        };
        
        const result = await todoService.add(todo);
        todo.id = result.id;
        dispatch(setTodo(todo));
    };

    return {
        state,
        addTodo
    }
};

export const useGetTodoList = () => {
    return useSelector((state) => state.todoManager.todos);
};
