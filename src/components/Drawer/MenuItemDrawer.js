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
import { useGetTabFilterCode } from "../../api/apiHooks";
import { useClickMenuActionsHandler } from "../../api/apiHooks/eventHandlerHooks";
import Input from "@mui/material/Input";
import { useSelector } from "react-redux";
import { useUpdateGroupName } from "../../api/apiHooks/groupHooks";
import { useChangeInputHandler } from "../../api/apiHooks/eventHandlerHooks";

export default function MenuItemDrawer(group) {
    const todoList = useSetTodoListByGroup("");
    const handlerClickMenuActions = useClickMenuActionsHandler();
    const tabFilterCode = useGetTabFilterCode();
    const groupField = useSelector(
        (state) => state.appManager.editGroupNameField
    );
    const updateGroupName = useUpdateGroupName();
    const inputChange = useChangeInputHandler('');

    const handlerUpdateGroupName = (event) => {
        event.preventDefault();
        const name = inputChange.state.groupNameEditField;
        updateGroupName.update(name, group.props.id);
    }

    let style = {
        width: 1500,
        maxWidth: "100%",
        display: "none",
    };

    let styleGroupItemName = { padding: "10px" };

    if (groupField.isOpen && group.props.id === groupField.groupId) {
        style.display = "block";
        styleGroupItemName.display = "none";
    }

    return (
        <Grid container spacing={1}>
            <Grid xs={15} item={true}>
                <ListItem button key={group.props.id}>
                    <ListItemIcon>
                        {group.props.code === "IMPORTANT" ? (
                            <InboxIcon />
                        ) : (
                            <IconButton
                                onClick={() => {
                                    handlerClickMenuActions.toggleAction(
                                        true,
                                        group.props.id
                                    );
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </ListItemIcon>
                    <ListItemText
                        onClick={() => {
                            todoList.getList(group.props.id, tabFilterCode);
                        }}
                        style={styleGroupItemName}
                        primary={group.props.name}
                    />
                    <form onSubmit={handlerUpdateGroupName}>
                        <Input id="component" style={style} name="groupNameEditField" onChange={(event)=>{inputChange.setField(event)}} defaultValue={group.props.name}/>
                    </form>
                </ListItem>
            </Grid>
            <Grid style={{ marginLeft: "25px" }}>
                <MenuActionsDrawer group={group}></MenuActionsDrawer>
            </Grid>
        </Grid>
    );
}
