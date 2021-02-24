import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDWfionhSD22F5_IWNR1czMfmB4VSF47sQ",
  authDomain: "todoapp-3cf2a.firebaseapp.com",
  projectId: "todoapp-3cf2a",
  storageBucket: "todoapp-3cf2a.appspot.com",
  messagingSenderId: "186659436737",
  appId: "1:186659436737:web:a5b17fd9a0283d848b7c40",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
