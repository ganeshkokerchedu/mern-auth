// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-78f39.firebaseapp.com",
  projectId: "mern-auth-78f39",
  storageBucket: "mern-auth-78f39.appspot.com",
  messagingSenderId: "674594191236",
  appId: "1:674594191236:web:9cc234b9ddf4c3951d0fd1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);