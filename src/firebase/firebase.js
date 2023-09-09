
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCyHpqhpvTHbFbbAE50k9f3pxTmSo8YXcs",
  authDomain: "reto-bienestar.firebaseapp.com",
  projectId: "reto-bienestar",
  storageBucket: "reto-bienestar.appspot.com",
  messagingSenderId: "618418580625",
  appId: "1:618418580625:web:eba530114735d6938e2330",
  measurementId: "G-QRQ14YSJEN"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp)
export const firebaseStorage = getStorage(firebaseApp)
export const analytics = getAnalytics(firebaseApp);
