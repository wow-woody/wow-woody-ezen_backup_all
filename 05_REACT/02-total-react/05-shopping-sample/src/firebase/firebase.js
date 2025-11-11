import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_DoWrEIRA0yM8gmvKg5TOl8xPDNS4mF0",
    authDomain: "ezen-test2.firebaseapp.com",
    projectId: "ezen-test2",
    storageBucket: "ezen-test2.firebasestorage.app",
    messagingSenderId: "1094099913191",
    appId: "1:1094099913191:web:05ad44c1a06d2a84275542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
