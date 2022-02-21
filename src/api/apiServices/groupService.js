import DataService from "./apiService";
import TodoDataService from "./todoService";

const TABLE = "groupslist";

export default class GroupService extends DataService {
    constructor(db, id = null) {
        super(db, TABLE);
        this.id = id;
    }

    addGroup = async (name) => {
        return await this.add({ name });
    };

    getImportantGroupId = async () => {
    	const group = await this.getList({ field: "code", logic: "==", value: "IMPORTANT" });
		if(Array.isArray(group) && group.length > 0) {
			return group[0].id;
		}
		return false;
    };

    deleteCompletly = async () => {
        if(this.id != null) {
            const todoService = new TodoDataService(this.db);
            await todoService.deleteByGroup(this.id);
            await this.delete();
        }
    }
}
