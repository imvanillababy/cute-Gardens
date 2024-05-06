// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUCE-vfim2jTaOo3KZzlzznRyK-23Uh5o",
  authDomain: "garden-demo-c4acd.firebaseapp.com",
  projectId: "garden-demo-c4acd",
  storageBucket: "garden-demo-c4acd.appspot.com",
  messagingSenderId: "344247229586",
  appId: "1:344247229586:web:8e65939dd00696374eda4b",
  measurementId: "G-0DJHCVLTH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);