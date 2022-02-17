import React from "react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from '@mui/icons-material/Menu';
import { useGetGroupList } from "../../api/apiHooks/groupHooks";

export default function MenuDrawer() {
    const groups = useGetGroupList();

    return (
        <div className="wrapper">
            <Toolbar />
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {!!groups.length &&
                    groups.map((group, index) => (
                        <ListItem button key={group.id}>
                            <ListItemIcon>
                              <MenuIcon />
                            </ListItemIcon>
                            <ListItemText primary={group.name} />
                        </ListItem>
                    ))}
            </List>
        </div>
    );
}
