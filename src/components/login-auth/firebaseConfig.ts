import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX_qq6JWwNPsG-cVIF0yGafWDbYOdWkWw",
  authDomain: "lendsqr-fe-test-e067a.firebaseapp.com",
  projectId: "lendsqr-fe-test-e067a",
  storageBucket: "lendsqr-fe-test-e067a.appspot.com",
  messagingSenderId: "553777239537",
  appId: "1:553777239537:web:6c18d624ee4bf7ded7e050",
  measurementId: "G-7WX5NWJPFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)