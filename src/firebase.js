// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBXatvQUgGRSFFjPShzlXNtucHm_4FZDOc",
    authDomain: "twitter-clone-459bd.firebaseapp.com",
    projectId: "twitter-clone-459bd",
    storageBucket: "twitter-clone-459bd.appspot.com",
    messagingSenderId: "505268824356",
    appId: "1:505268824356:web:ad641e16d0138a7b1eebb1",
    measurementId: "G-5VQBKPRS29"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;