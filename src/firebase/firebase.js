
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
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
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export {
    app,
    db
}