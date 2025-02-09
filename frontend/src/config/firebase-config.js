import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDLrOFMED_-ta2YvTeCCu4k6dBwSddNtug",
    authDomain: "frontcode-836f7.firebaseapp.com",
    projectId: "frontcode-836f7",
    storageBucket: "frontcode-836f7.firebasestorage.app",
    messagingSenderId: "508814411498",
    appId: "1:508814411498:web:22de8e5de94d73a1f3f993",
    measurementId: "G-FXRSRRGRDS",
};

// Initialiser Firebase
initializeApp(firebaseConfig); // Pas besoin de stocker dans 'app'
getAnalytics(); // Pas besoin de stocker dans 'analytics'
