// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbKqGTNbOh0HR_TEgqxCVQne2Uamgzerc",
  authDomain: "doctors-portal-b1e9e.firebaseapp.com",
  projectId: "doctors-portal-b1e9e",
  storageBucket: "doctors-portal-b1e9e.appspot.com",
  messagingSenderId: "445917006136",
  appId: "1:445917006136:web:33166a9c4a45705f5859cd"
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
