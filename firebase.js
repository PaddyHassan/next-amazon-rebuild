import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB1kI6442vbqp7fJ-MxUOPZh_brP2CIEbs",
    authDomain: "next-10d61.firebaseapp.com",
    projectId: "next-10d61",
    storageBucket: "next-10d61.appspot.com",
    messagingSenderId: "520307403703",
    appId: "1:520307403703:web:07b4360ebf34230e989632"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;