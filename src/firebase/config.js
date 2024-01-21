// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUwVaOFTbo9_R7A2mLOwbAAqAwVcfTUvA",
  authDomain: "photogallery-56798.firebaseapp.com",
  projectId: "photogallery-56798",
  storageBucket: "photogallery-56798.appspot.com",
  messagingSenderId: "15550361230",
  appId: "1:15550361230:web:43164fa488023909a163df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();