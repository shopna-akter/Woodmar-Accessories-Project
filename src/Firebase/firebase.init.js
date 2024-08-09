import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC71XyQGqUoWQKL29ZAXax_0ktOv2HlltI",
  authDomain: "n210-woodmart.firebaseapp.com",
  projectId: "n210-woodmart",
  storageBucket: "n210-woodmart.appspot.com",
  messagingSenderId: "418666007120",
  appId: "1:418666007120:web:3874fdc46df81b0eb55f55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);