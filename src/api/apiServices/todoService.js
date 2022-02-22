import DataService from "./apiService";

const TABLE = "todolist";

export default class TodoDataService extends DataService {
    constructor(db, id = null) {
        super(db, TABLE);
        this.id = id;
    }

    getTodo = async () => {
        return await this.getData();
    };

    updateTodo = async (updateData) => {
        return await this.update(updateData);
    };

    deleteTodo = async () => {
        return await this.delete();
    };

    getListByGroup = async (groupId) => {
        const filter = { field: "groupId", logic: "==", value: groupId };
        const result = await this.getList(filter);
        return result;
    };

    getListByImportant = async () => {
        const filter = { field: "isImportant", logic: "==", value: true };
        const result = await this.getList(filter);
        return result;
    };

    getListByCompleteAndGroup = async (isComplete = false, groupId) => {
        const filter = [
            { field: "isComplete", logic: "==", value: isComplete },
            { field: "groupId", logic: "==", value: groupId },
        ];
        const result = await this.getList(filter);
        return result;
    };

    getListByImportantAndGroup = async (groupId) => {
        const filter = [
            { field: "isImportant", logic: "==", value: true },
            { field: "groupId", logic: "==", value: groupId },
        ];
        const result = await this.getList(filter);
        return result;
    };

    getListByCompleteAndImportant = async (isComplete) => {
        const filter = [
            { field: "isImportant", logic: "==", value: true },
            { field: "isComplete", logic: "==", value: isComplete },
        ];
        const result = await this.getList(filter);
        return result;
    };

    changeComplete = async (isComplete) => {
        return await this.updateDocField({ isComplete });
    };

    changeImportant = async (isImportant) => {
        return await this.updateDocField({ isImportant });
    };

    deleteByGroup = async (groupId) => {
        if (groupId && groupId.length > 0) {
            const todoList = await this.getListByGroup(groupId);
            todoList.forEach((todo) => {
                const todoService = new TodoDataService(this.db, todo.id);
                todoService.deleteTodo();
            });
        }
    };
}
