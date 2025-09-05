// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLU8oYLyV576_p79ZzDEgZY5X84lM6xCo",
  authDomain: "cartoon-everything-f6098.firebaseapp.com",
  projectId: "cartoon-everything-f6098",
  storageBucket: "cartoon-everything-f6098.firebasestorage.app",
  messagingSenderId: "454190368685",
  appId: "1:454190368685:web:620676abd70693ae6b0324",
  measurementId: "G-PJ7JCPHGCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
