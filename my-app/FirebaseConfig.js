// Import the functions you need from the SDKs you need
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH9qvG8pasTFl7VDfU0IGIfX9Xa7SZN70",
  authDomain: "kidicards.firebaseapp.com",
  projectId: "kidicards",
  storageBucket: "kidicards.appspot.com",
  messagingSenderId: "377638968840",
  appId: "1:377638968840:web:cd9191bc4682e0b9d77bbd"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized
  }

export const FIREBASE_AUTH = auth();
