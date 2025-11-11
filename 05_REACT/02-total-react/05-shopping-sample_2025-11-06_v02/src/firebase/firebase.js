import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDP5oOBZZSlTB050L1Zq_oPyvLMxsLOQwY",
    authDomain: "ezen-test-24f82.firebaseapp.com",
    projectId: "ezen-test-24f82",
    storageBucket: "ezen-test-24f82.firebasestorage.app",
    messagingSenderId: "86039023919",
    appId: "1:86039023919:web:9cc61844c6941b704691da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);