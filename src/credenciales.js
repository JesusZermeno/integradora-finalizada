// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBitCEfuYzyu6tFNIFnhwXWkFuqa2BhXiQ",
  authDomain: "dbecoinnova-92ea5.firebaseapp.com",
  projectId: "dbecoinnova-92ea5",
  storageBucket: "dbecoinnova-92ea5.appspot.com",
  messagingSenderId: "619769580202",
  appId: "1:619769580202:web:389416c6a0b522955f1ed3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;