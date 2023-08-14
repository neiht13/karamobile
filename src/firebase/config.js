// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeOtAXVb71DOdKkPB6CVwMyC8bIJlpUOU",
    authDomain: "mkara-5e342.firebaseapp.com",
    projectId: "mkara-5e342",
    storageBucket: "mkara-5e342.appspot.com",
    messagingSenderId: "702404247641",
    appId: "1:702404247641:web:978f161ece372c401a3148"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;