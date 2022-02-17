import { useEffect, useCallback } from "react";
import TodoDataService from "../apiServices/todoService";
import { useDatabase } from ".";
import { setTodoList } from "../../redux/actions/todoAction";
import { useSelector, useDispatch } from "react-redux";

export const useSetTodoListByGroup = (groupId) => {
    const state = useGetTodoList();
    const db = useDatabase();
    const dispatch = useDispatch();

    const getList = useCallback(async (groupId) => {
        const todoService = new TodoDataService(db);
        const groupList = await todoService.getListByGroup(groupId);  
        dispatch(setTodoList(groupList));    
        return groupList;
    }, [db, dispatch]);

    useEffect(()=> {
        if(groupId) {
            getList(groupId);
        }
    }, [getList, groupId])
   
    
    return {
        state,
        getList
    }
};

export const useGetTodoList = () => {
    return useSelector((state) => state.todoManager.todos);
};