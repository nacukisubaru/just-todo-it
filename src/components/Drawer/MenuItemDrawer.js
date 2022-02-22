import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useSetTodoListByGroup } from "../../api/apiHooks/todoHooks";
import IconButton from "@mui/material/IconButton";
import MenuActionsDrawer from "./MenuActionsDrawer";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { toggleGroupMenu } from "../../redux/actions/appAction";
import { useGetTabFilterCode } from "../../api/apiHooks";

export default function MenuItemDrawer(group) {
    const todoList = useSetTodoListByGroup("");
    const dispatch = useDispatch();
    const stateMenu = useSelector((state) => state.appManager.groupMenu);
    const handlerClickGroupMenu = () => {
        const isOpen = !stateMenu.isOpen;
        dispatch(toggleGroupMenu({ isOpen, groupId: group.props.id }));
        //dispatch(selectGroupId(group.id));
    };

    const tabFilterCode = useGetTabFilterCode();

    return (
        <Grid container spacing={1}>
            <Grid xs={15} item={true}>
                <ListItem button key={group.props.id}>
                    <ListItemIcon>
                        {group.props.code === "IMPORTANT" ? (
                            <InboxIcon />
                        ) : (
                            <IconButton onClick={handlerClickGroupMenu}>
                                <MenuIcon />
                            </IconButton>
                        )}
                    </ListItemIcon>
                    <ListItemText
                        onClick={() => {
                            todoList.getList(group.props.id, tabFilterCode);
                        }}
                        style={{padding:'10px'}}
                        primary={group.props.name}
                    />
                </ListItem>
            </Grid>
            <Grid style={{ marginLeft: "25px" }}>
                <MenuActionsDrawer group={group}></MenuActionsDrawer>
            </Grid>
        </Grid>
    );
}
