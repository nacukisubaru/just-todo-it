import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import { useDeleteGroup } from "../../api/apiHooks/groupHooks";
import { useSelector } from "react-redux";
import { useGetSelectedGroupId } from "../../api/apiHooks/groupHooks";

export default function MenuActionsDrawer(group) {
    const currentGroup = group.group.props;
    const deleteGroup = useDeleteGroup();
    const stateMenu = useSelector((state)=> state.appManager.openGroupMenu);
    const getSelectedGroupId = useGetSelectedGroupId();

    return stateMenu === true && currentGroup.id == getSelectedGroupId ? (
        <Paper  sx={{ width: 320, maxWidth: "50%" }}>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText onClick={()=>{deleteGroup.remove(currentGroup.id)}}>Удалить</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    ) : (<div></div>);
}
