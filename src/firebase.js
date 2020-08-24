import firebase from "firebase";
const fireConf = {
  apiKey: "AIzaSyCYnAty5kfIqkfNQJH-bayYpnHPRrdyp1U",
  authDomain: "instagram-clone-2be51.firebaseapp.com",
  databaseURL: "https://instagram-clone-2be51.firebaseio.com",
  projectId: "instagram-clone-2be51",
  storageBucket: "instagram-clone-2be51.appspot.com",
  messagingSenderId: "785007462997",
  appId: "1:785007462997:web:c68e0b40f8c699a521a2dc",
  measurementId: "G-9H2DSJC96M",
};

firebase.initializeApp(fireConf);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
