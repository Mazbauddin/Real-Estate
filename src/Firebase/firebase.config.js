import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNmyyUxcQRIMBcpV8_levywZ3DgMnulH4",
  authDomain: "react-real-estate-238da.firebaseapp.com",
  projectId: "react-real-estate-238da",
  storageBucket: "react-real-estate-238da.appspot.com",
  messagingSenderId: "764024643206",
  appId: "1:764024643206:web:6b77586efc2b96663a3b07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
