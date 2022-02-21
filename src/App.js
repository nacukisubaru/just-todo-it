import "./App.css";
import React from "react";
import AppDrawer from "./components/Drawer/AppDrawer";
import { useConnect } from "./api/apiHooks/index";

import { useSetGroupsList } from "./api/apiHooks/groupHooks";

function App() {
    useConnect();
    useSetGroupsList();

    return <AppDrawer></AppDrawer>;
}

export default App;
