// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA96yY8gxdFlNqTC3fApg9ZpdarcCrQwBE",
    authDomain: "mkaradtp.firebaseapp.com",
    projectId: "mkaradtp",
    storageBucket: "mkaradtp.appspot.com",
    messagingSenderId: "753060296213",
    appId: "1:753060296213:web:89286c041e56758308c01c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Create a storage reference from our storage service
export default firebaseApp;