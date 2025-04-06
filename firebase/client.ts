// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZz6H2TZfio7_JbuD40LL64sGCOANld1w",
  authDomain: "prepwise-c35fa.firebaseapp.com",
  projectId: "prepwise-c35fa",
  storageBucket: "prepwise-c35fa.firebasestorage.app",
  messagingSenderId: "305294382866",
  appId: "1:305294382866:web:4935f5b4fe91e9ca2a05cb",
  measurementId: "G-G0JY95ZLWV"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);