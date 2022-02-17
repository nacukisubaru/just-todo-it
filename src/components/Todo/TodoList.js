import React, { useEffect } from "react";
import { useGetTodoList } from "../../api/apiHooks/todoHooks";
import { useGetGroupList } from "../../api/apiHooks/groupHooks";
import { useSetTodoListByGroup } from "../../api/apiHooks/todoHooks";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const todos = useGetTodoList();
    const groupList = useGetGroupList();
    const todoList = useSetTodoListByGroup("");
    const getList = todoList.getList;

    useEffect(()=>{
        if(groupList[0]) {
            getList(groupList[0].id);
        }
    }, [groupList, getList])

    return (
        <div className="wrapper wrap-bottom">
            {!!todos.length && todos.map((todo) => <TodoItem props={todo} key={todo.id}></TodoItem>)}
        </div>
    );
}
