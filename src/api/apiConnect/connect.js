// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv4FMo3BdFrOFUI2IZjcxVvlTU3T8934w",
    authDomain: "just-todo-it-v2.firebaseapp.com",
    projectId: "just-todo-it-v2",
    storageBucket: "just-todo-it-v2.appspot.com",
    messagingSenderId: "403660952649",
    appId: "1:403660952649:web:25f7616bc0c66c8daedb98",
    measurementId: "G-ZCZGZBLV4Y"
};

// Initialize Firebase
export function connectDB() {
    return getFirestore(initializeApp(firebaseConfig));
}
