// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Add SDKs for Firebase products that you want to use

import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2J8TIYLgGrd6u5mlF0-q1LXhucEg9YDM",
  authDomain: "dragon-news-96794.firebaseapp.com",
  projectId: "dragon-news-96794",
  storageBucket: "dragon-news-96794.firebasestorage.app",
  messagingSenderId: "494292653202",
  appId: "1:494292653202:web:dbf1380fa2494a4e00824b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
