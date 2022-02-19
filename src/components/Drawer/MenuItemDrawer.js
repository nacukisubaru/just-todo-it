import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useSetTodoListByGroup } from "../../api/apiHooks/todoHooks";

export default function MenuItemDrawer(group) {
    const todoList = useSetTodoListByGroup("");

    return (
        <ListItem button key={group.props.id} onClick={()=>{todoList.getList(group.props.id)}}>
            <ListItemIcon>
                {group.props.code == 'IMPORTANT' ? <InboxIcon /> : <MenuIcon />}
            </ListItemIcon>
            <ListItemText primary={group.props.name} />
        </ListItem>
    );
}
