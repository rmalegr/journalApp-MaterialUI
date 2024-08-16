// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx15Wtgje44Qnz0nWFOyOTTiwDXsrfRYE",
  authDomain: "journal-6f849.firebaseapp.com",
  projectId: "journal-6f849",
  storageBucket: "journal-6f849.appspot.com",
  messagingSenderId: "75957448093",
  appId: "1:75957448093:web:e2a1c4cbbececc03911374",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
