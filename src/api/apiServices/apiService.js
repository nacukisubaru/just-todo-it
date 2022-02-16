import {
    collection,
    getDocs,
    addDoc,
    doc,
    deleteDoc,
    getDoc,
    setDoc
} from "firebase/firestore/lite";

export default class DataService {
    constructor(db, table) {
        this.data = {}
        this.table = table
        this.db = db
        this.collection = collection(this.db, this.table)
    }

    getData = async () => {
        return await getDoc(doc(this.db, this.table, this.id))
    }

    getList = async () => {
        const result = await getDocs(collection(this.db, this.table))
        return result.docs.map((doc) => ({...doc.data(), id:doc.id}))
    }

    getDoc = async () => {
        return await doc(this.db, this.table, this.id)
    };

    add = async (newData) => {
        if (this.collection && newData) 
            return await addDoc(this.collection, newData)
        else return false
    };

    update = async (updateData) => {
        const elementDoc = await this.getDoc()
        return await setDoc(elementDoc, updateData)
    };

    delete = async () => {
        const elementDoc = await this.getDoc()
        await deleteDoc(elementDoc)
        return elementDoc
    };
}
