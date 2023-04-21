// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: Constants.manifest?.extra?.firebaseApiKey,
//   authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
//   projectId: Constants.manifest?.extra?.firebaseProjectId,
//   storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
//   messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
//   appId: Constants.manifest?.extra?.firebaseAppId,
// }

const firebaseConfig = {
  apiKey: "AIzaSyB-nMO-aRFvktsfYfxOroGvqJuU5kztogE",
  authDomain: "test-auth-d367f.firebaseapp.com",
  projectId: "test-auth-d367f",
  storageBucket: "test-auth-d367f.appspot.com",
  messagingSenderId: "826192564515",
  appId: "1:826192564515:web:5517668debbf515a94fc96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

