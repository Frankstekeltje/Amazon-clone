// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSM5zHFsLpF19j1Sd9RninNzqbd7YOWrE",
  authDomain: "clone-89aa0.firebaseapp.com",
  projectId: "clone-89aa0",
  storageBucket: "clone-89aa0.appspot.com",
  messagingSenderId: "595686957418",
  appId: "1:595686957418:web:7c2fb26daad54599af8513",
  measurementId: "G-NESR1KJ16Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };