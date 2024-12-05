
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase,ref,set } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7HFIi4qAlppcgM2P9vH2WkCsuvyfEds0",
  authDomain: "maiven2.firebaseapp.com",
  databaseURL: "https://maiven2-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "maiven2",
  storageBucket: "maiven2.firebasestorage.app",
  messagingSenderId: "390667157704",
  appId: "1:390667157704:web:dc3dc76897f538305b25fd",
  measurementId: "G-EZBTYJVFES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);




