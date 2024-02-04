// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXPv3JJAbd7VVLo1DAAnuxWZjPQ6TrqmA",
  authDomain: "netflix-e4765.firebaseapp.com",
  projectId: "netflix-e4765",
  storageBucket: "netflix-e4765.appspot.com",
  messagingSenderId: "625596604674",
  appId: "1:625596604674:web:43caa8706185e5b6e6a21b",
  measurementId: "G-RX8F0XG4V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();