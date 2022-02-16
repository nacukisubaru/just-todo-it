import "./App.css";
import React from "react";
import AppDrawer from "./components/Drawer/AppDrawer";
import {useConnect, useDatabase} from "./api/apiHooks/index"
import { useGetGroupList } from "./api/apiHooks/groupHooks";
import  {useDispatch} from "react-redux";
import {setGroupsList} from "./redux/actions/groupAction";

function App() {
    const dispatch = useDispatch();
    const db = useConnect();
    dispatch(setGroupsList(db))
    return <AppDrawer></AppDrawer>;
}

export default App;