// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkfRpJDr1iYVhyThjekvyBfmglZ7JxwI8",
  authDomain: "dragon-news-2e2cc.firebaseapp.com",
  projectId: "dragon-news-2e2cc",
  storageBucket: "dragon-news-2e2cc.firebasestorage.app",
  messagingSenderId: "986818883186",
  appId: "1:986818883186:web:6a261332b71dbc971b9ceb"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);