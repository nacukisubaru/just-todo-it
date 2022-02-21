import { connectDB } from "../apiConnect/connect";
import { apiManager } from "../../redux/actions/apiAction";
import { useDispatch, useSelector } from "react-redux";

export const useConnect = () => {
    const db = connectDB();
    const dispatch = useDispatch();
    dispatch(apiManager(db));
    return db;
}

export const useDatabase = () => {
    return useSelector((state)=> state.apiManager.db);
}

export const useGetTabFilterCode = () => {
    return useSelector((state)=> state.appManager.tabFilterCode);
} 