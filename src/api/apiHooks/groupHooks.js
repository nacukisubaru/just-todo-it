import { useSelector } from "react-redux";
// import GroupService from "../apiServices/groupService";
// import { useDatabase } from "./index";
// import { useDispatch } from "react-redux";
// import { setGroupsList } from "../../redux/actions/groupAction";

export const useGetGroupList = () => {
    return useSelector((state)=> state.groupManager.groups);
}

export const useGetSelectedGroupId = () => {
    return useSelector((state)=> state.groupManager.selectedGroupId);    
}

// export const useSetGroupList = () => {
//     const db = useDatabase();
//     const dispatch = useDispatch();
//     const getGroupList = useGetGroupList();

//     async function setGroupList () {
//         const groupService = new GroupService(db);
//         const groupList = await groupService.getList();
//         dispatch(setGroupsList(groupList));
//     }

//     setGroupList();

//     return  useGetGroupList();
// }
