import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBssVSAQMy1NzBj0o9fjJVsLEI2523SFN8",
  authDomain: "clone-d4327.firebaseapp.com",
  projectId: "clone-d4327",
  storageBucket: "clone-d4327.firebasestorage.app",
  messagingSenderId: "277805106085",
  appId: "1:277805106085:web:aa3c700829a14ef9a0de4c",
  measurementId: "G-FX6GYM2EM7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };