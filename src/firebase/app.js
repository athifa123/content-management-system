// Import the functions you need from the SDKs you need
import { initializeApp}  from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi69HfNpdw8evybPFm2u3QAF2_kfBBA28",
  authDomain: "content-management-syste-1b513.firebaseapp.com",
  projectId: "content-management-syste-1b513",
  storageBucket: "content-management-syste-1b513.appspot.com",
  messagingSenderId: "577842814536",
  appId: "1:577842814536:web:01e4ce6f54fd4f82e4027d",
  measurementId: "G-K5241TWB1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
