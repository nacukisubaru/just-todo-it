// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkAyMnBOc9iH7SrnWlTwLw0vblCZFt3kY",
    authDomain: "just-todo-it-v3.firebaseapp.com",
    projectId: "just-todo-it-v3",
    storageBucket: "just-todo-it-v3.appspot.com",
    messagingSenderId: "722467945902",
    appId: "1:722467945902:web:454b77e93c004a95ad9c3f",
    measurementId: "G-EF2H58KFM9",
};
// Initialize Firebase
export function connectDB() {
    return getFirestore(initializeApp(firebaseConfig));
}
