import DataService from "./apiService";

const TABLE = 'todolist';

export default class TodoDataService extends DataService {
	constructor(db, id=null) {
		super(db, TABLE)
		this.id = id
	}

	getTodo = async () => {
		return await this.getData()
	}

	updateTodo = async (updateData) => {
		return await this.update(updateData)
	}

	deleteTodo = async () => {
		return await this.delete()
	}
}