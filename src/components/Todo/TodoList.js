import React, { useEffect } from "react";
import { useGetTodoList } from "../../api/apiHooks/todoHooks";
import { useGetGroupList } from "../../api/apiHooks/groupHooks";
import { useSetTodoListByGroup } from "../../api/apiHooks/todoHooks";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const todos = useGetTodoList();
    const groupList = useGetGroupList();
    const todoList = useSetTodoListByGroup("");

    useEffect(()=>{
        if(groupList[0]) {
            todoList.getList(groupList[0].id);
        }
    }, [groupList])

    return (
        <div className="wrapper">
            {!!todos.length && todos.map((todo) => <TodoItem props={todo}></TodoItem>)}
        </div>
    );
}
