// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDLvBxBYS4bmgTBr7mHgLgDiro4F6-AOUg",
  authDomain: "fir-course-2ca7a.firebaseapp.com",
  projectId: "fir-course-2ca7a",
  storageBucket: "fir-course-2ca7a.appspot.com",
  messagingSenderId: "297436220135",
  appId: "1:297436220135:web:adfeb28c5a579ae86eb042",
  measurementId: "G-7XMVDH713S"
};


const app = initializeApp(firebaseConfig); //start firebase
export const auth = getAuth(app);//add firebase to auth
export const googleProvider = new GoogleAuthProvider();//using google provider