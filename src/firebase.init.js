// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDes5glFm19NUHia7Lry_hkHgajgHNdJXo",
  authDomain: "computer-world-14654.firebaseapp.com",
  projectId: "computer-world-14654",
  storageBucket: "computer-world-14654.appspot.com",
  messagingSenderId: "1071138725521",
  appId: "1:1071138725521:web:6488cb05315bf422346930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;