// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz4GD9ZchmR7VSi6O7C23pUq7bc96qJu8",
  authDomain: "daily-star-breaking.firebaseapp.com",
  projectId: "daily-star-breaking",
  storageBucket: "daily-star-breaking.firebasestorage.app",
  messagingSenderId: "705795976570",
  appId: "1:705795976570:web:f2bf1d5e5a505a064bfac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;