import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoBAeM_4YiqZuF4_XS0RjcgIWUJdzIxkI",
  authDomain: "authentication-ecommerce-9b11c.firebaseapp.com",
  projectId: "authentication-ecommerce-9b11c",
  storageBucket: "authentication-ecommerce-9b11c.appspot.com",
  messagingSenderId: "381190749901",
  appId: "1:381190749901:web:c984e9d831566490bcb384",
  measurementId: "G-N660ZEWFRQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
