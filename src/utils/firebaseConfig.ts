import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvaXHXFFGyQ-xW2qnj1rI1dQjMKyXYB5k",
  authDomain: "pokedex-01-2c8b1.firebaseapp.com",
  projectId: "pokedex-01-2c8b1",
  storageBucket: "pokedex-01-2c8b1.appspot.com",
  messagingSenderId: "177331226237",
  appId: "1:177331226237:web:0cc0826ecef1348730d314",
  measurementId: "G-HYB10F4X3N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
