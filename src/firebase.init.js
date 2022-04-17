// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb_GOMJp7hyuTuWh-UTuNuJxie5iXhjlw",
  authDomain: "emma-watson-16f05.firebaseapp.com",
  projectId: "emma-watson-16f05",
  storageBucket: "emma-watson-16f05.appspot.com",
  messagingSenderId: "1005337994948",
  appId: "1:1005337994948:web:d002b09f944e11bb980b91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
