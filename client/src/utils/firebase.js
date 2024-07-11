// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-flow-4bbb6.firebaseapp.com",
  projectId: "task-flow-4bbb6",
  storageBucket: "task-flow-4bbb6.appspot.com",
  messagingSenderId: "139577171362",
  appId: "1:139577171362:web:d263a2c1c3ee83fbc6a6fb",
  measurementId: "G-GHH5QNQPG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);