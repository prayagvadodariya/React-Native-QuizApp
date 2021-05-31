import firebase from 'firebase/app'
import "@firebase/database";
// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBPlQSlu0tOR7JsxPr3qPMQQTeQj413j9c",
    authDomain: "reactfcm-ca1e0.firebaseapp.com",
    databaseURL: 'https://reactfcm-ca1e0-default-rtdb.firebaseio.com',
    projectId: "reactfcm-ca1e0",
    storageBucket: "reactfcm-ca1e0.appspot.com",
    messagingSenderId: "139352453941",
    appId: "1:139352453941:web:8a87c93d0a776ee208d27c",
    measurementId: "G-LKZQ524FVQ"
};

export default firebase.initializeApp(firebaseConfig);;