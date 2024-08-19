// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth,  GoogleAuthProvider,
    FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbO5bzt2po4Moah_1irWQltM2JFDpi5XU",
  authDomain: "ecommerce-project-25baf.firebaseapp.com",
  projectId: "ecommerce-project-25baf",
  storageBucket: "ecommerce-project-25baf.appspot.com",
  messagingSenderId: "1035793315035",
  appId: "1:1035793315035:web:6944a3184bc49a35d248fe",
  measurementId: "G-QN9ZG83TGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();