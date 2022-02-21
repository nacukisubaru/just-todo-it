import React, { useEffect } from "react";
import { useGetTodoList } from "../../api/apiHooks/todoHooks";
import { useGetGroupList } from "../../api/apiHooks/groupHooks";
import { useSetTodoListByGroup } from "../../api/apiHooks/todoHooks";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";

export default function TodoList() {
    const todos = useGetTodoList();
    const groupList = useGetGroupList();
    const todoList = useSetTodoListByGroup("");
    const getList = todoList.getList;

    useEffect(()=>{
        if(groupList[1]) {
            getList(groupList[1].id);
        }
    }, [groupList, getList])

    return (
        <div className="wrapper wrap-bottom" >
             <TodoFilter></TodoFilter>
            {!!todos.length && todos.map((todo) => <TodoItem props={todo} key={todo.id}></TodoItem>)}
        </div>
    );
}
