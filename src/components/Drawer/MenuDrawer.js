import React, { useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Button from "@mui/material/Button";
import { useGetGroupList } from "../../api/apiHooks/groupHooks";
import MenuItemDrawer from "./MenuItemDrawer";
import { toggleBtnAddGroup } from "../../redux/actions/appAction";
import { useDispatch, useSelector } from "react-redux";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import SaveIcon from "@mui/icons-material/Save";
import { useChangeInputHandler } from "../../api/apiHooks/eventHandlerHooks";
import { useAddGroup } from "../../api/apiHooks/groupHooks";
import { useCreateImportantGroup } from "../../api/apiHooks/groupHooks";

export default function MenuDrawer() {
    const groups = useGetGroupList();
    const state = useSelector((state) => state.appManager.showBtnAddGroup);
    const dispatch = useDispatch();
    const inputHandler = useChangeInputHandler();
    const group = useAddGroup();
    const importantGroup = useCreateImportantGroup();
    const arrayPresetGroups = [{ id: importantGroup.id, name: "Важное", code: "IMPORTANT" }];
    
    let groupsList = [];
    !!groups.length && groups.map((group) => {
        if(group.id !== importantGroup.id) {
            groupsList.push(group);
        }
    });

    const handlerClickAddGroup = () => {
        dispatch(toggleBtnAddGroup(!state));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (inputHandler.state.groupNameField) {
            group.addGroup(inputHandler.state.groupNameField);
            dispatch(toggleBtnAddGroup(!state));
        }
    };

    let style = {
        display: "block",
    };

    if (!state) {
        style = {
            display: "none",
        };
    }

    let styleInput = {
        display: "none",
    };

    if (!state) {
        styleInput = {
            display: "block",
        };
    }

    return (
        <div className="wrapper">
            <Toolbar />
            <Divider />
            <List>
                {arrayPresetGroups.map((group) => (
                     <MenuItemDrawer
                     props={group}
                     key={group.id}
                 ></MenuItemDrawer>
                ))}
            </List>
            <Divider />
            <List>
                {!!groupsList.length &&
                    groupsList.map((group) => (
                        <MenuItemDrawer
                            props={group}
                            key={group.id}
                        ></MenuItemDrawer>
                    ))}
            </List>
            <Button style={style} variant="text" onClick={handlerClickAddGroup}>
                + Добавить группу
            </Button>
            <form onSubmit={submitHandler}>
                <FormControl variant="standard" style={styleInput}>
                    <InputLabel htmlFor="component-simple">
                        Что нужно сделать...
                    </InputLabel>

                    <Input
                        id="component"
                        style={{
                            width: 1500,
                            maxWidth: "100%",
                            visibility: "none",
                        }}
                        name="groupNameField"
                        onChange={(event) => {
                            inputHandler.setField(event);
                        }}
                    />
                    <Button
                        variant="outlined"
                        startIcon={<SaveIcon />}
                        type="submit"
                    >
                        save
                    </Button>
                </FormControl>
            </form>
        </div>
    );
}
