// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDnmiEW3a_gY3cSrdLbfgfNQoPu9g6fi5U",
    authDomain: "discord-reac.firebaseapp.com",
    databaseURL: "https://discord-reac.firebaseio.com",
    projectId: "discord-reac",
    storageBucket: "discord-reac.appspot.com",
    messagingSenderId: "1070909903348",
    appId: "1:1070909903348:web:98f844dc2e7f12184e29a1",
    measurementId: "G-83YTQMFKPW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
