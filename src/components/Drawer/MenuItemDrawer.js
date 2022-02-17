import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useSetTodoListByGroup } from "../../api/apiHooks/todoHooks";

export default function MenuItemDrawer(group) {
    const setTodoList = useSetTodoListByGroup("");
    return (
        <ListItem button key={group.props.id} onClick={()=>{setTodoList.getList(group.props.id)}}>
            <ListItemIcon>
                <MenuIcon />
            </ListItemIcon>
            <ListItemText primary={group.props.name} />
        </ListItem>
    );
}
