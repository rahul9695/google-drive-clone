import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-clone-5e702.firebaseapp.com",
  projectId: "drive-clone-5e702",
  storageBucket: "drive-clone-5e702.appspot.com",
  messagingSenderId: "754979270260",
  appId: "1:754979270260:web:e506855ab3a6e667b3ab21",
};


!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { db, storage };
