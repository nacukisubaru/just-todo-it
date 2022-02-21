import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GroupService from "../apiServices/groupService";
import { setGroup } from "../../redux/actions/groupAction";
import { useDatabase } from ".";
import { setImportantGroupId } from "../../redux/actions/groupAction";
import { setGroupsList } from "../../redux/actions/groupAction";

export const useGetGroupList = () => {
    return useSelector((state) => state.groupManager.groups);
};

export const useGetSelectedGroupId = () => {
    return useSelector((state) => state.groupManager.selectedGroupId);
};

export const useGetGroupManager = () => {
    return useSelector((state) => state.groupManager);
};

export const useAddGroup = () => {
    const state = useGetGroupList();
    const db = useDatabase();
    const dispatch = useDispatch();

    const addGroup = async (name) => {
        if (name.length > 0) {
            const groupService = new GroupService(db);
            const result = await groupService.addGroup(name);
            dispatch(setGroup({ name, id: result.id }));
            return result;
        }
        return false;
    };

    return {
        state,
        addGroup,
    };
};

export const useCreateImportantGroup = () => {
    const db = useDatabase();
    const dispatch = useDispatch();

    const createGroup = async () => {
        const groupService = new GroupService(db);
        let importantGroupId = await groupService.getImportantGroupId();
        if (!importantGroupId) {
            importantGroupId = await groupService.add({
                name: "Важное",
                code: "IMPORTANT",
            });
        }
        dispatch(setImportantGroupId(importantGroupId));
    };

    useEffect(() => {
        createGroup();
    }, []);

    const id = useGetGroupManager().importantGroupId;

    return {
        id,
        createGroup,
    };
};

export const useDeleteGroup = () => {
    const db = useDatabase();
    const dispatch = useDispatch();
    const groups = useGetGroupList();
    let newGroups = [];

    const remove = async (groupId) => {
        const groupService = new GroupService(db, groupId);
        await groupService.deleteCompletly();
        groups.map((group)=>{
            if(group.id !== groupId) {
                newGroups.push(group);
            }
        })
        dispatch(setGroupsList(newGroups));
    };

    return {remove};
};

export const useSetGroupsList = () => {
    const db = useDatabase();
    const dispatch = useDispatch();
    const getGroupList = useGetGroupList();

    async function set() {
        const groupService = new GroupService(db);
        const groupList = await groupService.getList();
        
        dispatch(setGroupsList(groupList));
    }

    useEffect(() => {
        set();
    }, []);

    return { getGroupList, set };
};
