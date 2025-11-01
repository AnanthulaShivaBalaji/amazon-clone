import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_lX63Zd0z6VPOe2ufocfJ5Rj-l-2tEHU",
  authDomain: "clone-4ca4a.firebaseapp.com",
  projectId: "clone-4ca4a",
  storageBucket: "clone-4ca4a.firebasestorage.app",
  messagingSenderId: "297016869025",
  appId: "1:297016869025:web:9aaacaa80c68035b73b0e0",
  measurementId: "G-N4PRTK3F19"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };