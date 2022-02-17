import {
    collection,
    getDocs,
    addDoc,
    doc,
    deleteDoc,
    getDoc,
    setDoc,
    query,
    where,
    updateDoc,
} from "firebase/firestore/lite";

export default class DataService {
    constructor(db, table) {
        this.data = {};
        this.table = table;
        this.db = db;
        this.collection = collection(this.db, this.table);
    }

    getData = async () => {
        return await getDoc(doc(this.db, this.table, this.id));
    };

    getList = async (filter = null) => {
        let arrayList = [];
        let result = {};
        const listRef = collection(this.db, this.table);
        if (filter == null) {
            result = await getDocs(listRef);
        } else {
            if (
                (filter.length !== 3 || !filter.hasOwnProperty("field"),
                !filter.hasOwnProperty("logic"),
                !filter.hasOwnProperty("value"))
            ) {
                return false;
            }
            result = query(
                listRef,
                where(filter.field, filter.logic, filter.value)
            );
            result.docs = await getDocs(result);
        }

        result.docs.forEach((doc) =>
            arrayList.push({ ...doc.data(), id: doc.id })
        );
        return arrayList;
    };

    getDoc = async () => {
        return await doc(this.db, this.table, this.id);
    };

    add = async (newData) => {
        if (this.collection && newData)
            return await addDoc(this.collection, newData);
        else return false;
    };

    update = async (updateData) => {
        const elementDoc = await this.getDoc();
        return await setDoc(elementDoc, updateData);
    };

    updateDocField = async (objFields) => {
        const docRef = await this.getDoc();
        console.log(docRef);
        await updateDoc(docRef, objFields);
    };

    delete = async () => {
        const elementDoc = await this.getDoc();
        await deleteDoc(elementDoc);
        return elementDoc;
    };
}
