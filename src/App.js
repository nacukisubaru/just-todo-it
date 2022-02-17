import "./App.css";
import React, { useEffect } from "react";
import AppDrawer from "./components/Drawer/AppDrawer";
import { useConnect } from "./api/apiHooks/index";
import { useDispatch } from "react-redux";
import { setGroupsList } from "./redux/actions/groupAction";

function App() {
    const dispatch = useDispatch();
    const db = useConnect();

    useEffect(() => {
        dispatch(setGroupsList(db));
    }, [db, dispatch]);

    return <AppDrawer></AppDrawer>;
}

export default App;
