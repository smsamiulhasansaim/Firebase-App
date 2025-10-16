import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwTUYxyh1mFHuZzmbudGnbwQIrv2gqbXk",
  authDomain: "fir-app-4a82d.firebaseapp.com",
  projectId: "fir-app-4a82d",
  storageBucket: "fir-app-4a82d.firebasestorage.app",
  messagingSenderId: "727871820585",
  appId: "1:727871820585:web:e664e26e06c12fc97c9d38"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);