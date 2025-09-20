// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2blR5ADy8TrttrICFTZ4_zcb9or8mI-M",
  authDomain: "birthday-app-7ab92.firebaseapp.com",
  projectId: "birthday-app-7ab92",
  storageBucket: "birthday-app-7ab92.firebasestorage.app",
  messagingSenderId: "960880520132",
  appId: "1:960880520132:web:ee170d35bd5479d38fd291",
  measurementId: "G-XP0FKGHZSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);