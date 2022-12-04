import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOgBPcpIsU8RtP-jjc1JEblkDLgIA36Dk",
  authDomain: "hack-the-code-ad8df.firebaseapp.com",
  databaseURL: "https://hack-the-code-ad8df-default-rtdb.firebaseio.com",
  projectId: "hack-the-code-ad8df",
  storageBucket: "hack-the-code-ad8df.appspot.com",
  messagingSenderId: "622654758830",
  appId: "1:622654758830:web:ef33822bd5d34b4175b23f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);