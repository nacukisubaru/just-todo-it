import { useSelector, useDispatch } from "react-redux";
import GroupService from "../apiServices/groupService";
import { setGroup } from "../../redux/actions/groupAction";
import { useDatabase } from ".";
// import GroupService from "../apiServices/groupService";
// import { useDatabase } from "./index";
// import { useDispatch } from "react-redux";
// import { setGroupsList } from "../../redux/actions/groupAction";

export const useGetGroupList = () => {
    return useSelector((state) => state.groupManager.groups);
};

export const useGetSelectedGroupId = () => {
    return useSelector((state) => state.groupManager.selectedGroupId);
};

export const useAddGroup = () => {
    const state = useGetGroupList();
    const db = useDatabase();
    const dispatch = useDispatch();

    const addGroup = async (name) => {
        if (name.length > 0) {
            const groupService = new GroupService(db);
            const result = await groupService.addGroup(name);
            dispatch(setGroup({name, id:result.id}));
            return result;
        }
        return false;
    };

    return {
        state,
        addGroup
    };
};

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
