import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import { useDeleteGroup } from "../../api/apiHooks/groupHooks";
import { useSelector } from "react-redux";

export default function MenuActionsDrawer(group) {
    const currentGroup = group.group.props;
    const deleteGroup = useDeleteGroup();
    const stateMenu = useSelector((state)=> state.appManager.groupMenu);
    
    return stateMenu.isOpen === true && currentGroup.id === stateMenu.groupId ? (
        <Paper  sx={{ width: 320, maxWidth: "50%" }}>
            <MenuList>
                <MenuItem onClick={()=>{deleteGroup.remove(currentGroup.id)}}>
                    <ListItemIcon>
                        <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Удалить</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    ) : (<div></div>);
}
