import DataService from "./apiService";

const TABLE = 'groupslist';

export default class GroupService extends DataService {
    constructor(db, id=null) {
		super(db, TABLE)
		this.id = id
	}

}