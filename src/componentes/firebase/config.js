// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore/lite";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaKN0RVCkoVCJwGGR6nWyO2A4QLwwMnHU",
  authDomain: "react-lucas.firebaseapp.com",
  projectId: "react-lucas",
  storageBucket: "react-lucas.appspot.com",
  messagingSenderId: "201548391744",
  appId: "1:201548391744:web:a47f6d3de7ece286a2c6a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
