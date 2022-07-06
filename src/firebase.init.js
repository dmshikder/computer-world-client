// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeB0_vOYrVAuva-Be975g29T-bZav5Pws",
  authDomain: "computer-world-c827d.firebaseapp.com",
  projectId: "computer-world-c827d",
  storageBucket: "computer-world-c827d.appspot.com",
  messagingSenderId: "431156882990",
  appId: "1:431156882990:web:f37ccaf4e1d72e3bc579bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;