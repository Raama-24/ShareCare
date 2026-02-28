// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { enableNetwork } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyDhBXw6sRMWQ81t9lC3foZznLmeWi3fzYg",
  authDomain: "sharecare-945cb.firebaseapp.com",
  projectId: "sharecare-945cb",
  storageBucket: "sharecare-945cb.firebasestorage.app",
  messagingSenderId: "905830961306",
  appId: "1:905830961306:web:c8932dc9e20d5a24980f23"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// 👇 FORCE FIRESTORE BACK ONLINE
enableNetwork(db).catch(console.error);