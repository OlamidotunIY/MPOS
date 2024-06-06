// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBzVyJTr1bQapPXmFdMvx2xxMhYcMddPk",
  authDomain: "mpos-b4c57.firebaseapp.com",
  projectId: "mpos-b4c57",
  storageBucket: "mpos-b4c57.appspot.com",
  messagingSenderId: "988138719448",
  appId: "1:988138719448:web:485a29b1450aed8007efad",
  measurementId: "G-Y4DB6GK42M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const userCollection = collection(db, "users");