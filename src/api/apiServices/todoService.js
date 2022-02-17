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

    changeComplete = async(isComplete) => {
        console.log({isComplete})
        return await this.updateDocField({isComplete})
    }
}
