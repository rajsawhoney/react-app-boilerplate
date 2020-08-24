import firebase from "firebase";
const fireConf = {
  apiKey: "AIzaSyA7hYLksdoJLij6TbOicwOr6LVAOqJNv1A",
    authDomain: "share-message-85a43.firebaseapp.com",
    databaseURL: "https://share-message-85a43.firebaseio.com",
    projectId: "share-message-85a43",
    storageBucket: "share-message-85a43.appspot.com",
    messagingSenderId: "895841365577",
    appId: "1:895841365577:web:f2b41086d4134536169998",
    measurementId: "G-S7VG4NS8L9"
};

firebase.initializeApp(fireConf);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
