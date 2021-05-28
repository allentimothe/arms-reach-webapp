import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBV4UuaL4LR3U5W9XNynQXvxIZvb0a7i6Y",
  authDomain: "arms-reach-beta.firebaseapp.com",
  projectId: "arms-reach-beta",
  storageBucket: "arms-reach-beta.appspot.com",
  messagingSenderId: "771657091604",
  appId: "1:771657091604:web:4158879736be45ec03b501"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, db, storage };
