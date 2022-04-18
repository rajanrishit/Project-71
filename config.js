import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDURWeCyD8KPecHS5rDnnFgZ9RZfTOWZR8",
    authDomain: "project-71-cb421.firebaseapp.com",
    projectId: "project-71-cb421",
    storageBucket: "project-71-cb421.appspot.com",
    messagingSenderId: "714850187354",
    appId: "1:714850187354:web:426d0cc6a6c4c19a500063"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
