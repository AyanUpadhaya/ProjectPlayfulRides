// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "playfulrides-app.firebaseapp.com",
  projectId: "playfulrides-app",
  storageBucket: "playfulrides-app.appspot.com",
  messagingSenderId: "482149717537",
  appId: "1:482149717537:web:2d212226ad6d1f58f97560"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);