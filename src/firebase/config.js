// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUtlbadfd6OXTMWXkxu_5n7NACp7w7EII",
  authDomain: "react-cursos-1-d164b.firebaseapp.com",
  projectId: "react-cursos-1-d164b",
  storageBucket: "react-cursos-1-d164b.appspot.com",
  messagingSenderId: "752451050542",
  appId: "1:752451050542:web:270888d6100fea92e593bf",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
