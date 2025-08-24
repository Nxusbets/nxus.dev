import { initializeApp } from "firebase/app";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAA1OA8zD2ps611ixDdjPg0a_Vdh59vVcs",
  authDomain: "nxus-studio.firebaseapp.com",
  projectId: "nxus-studio",
  storageBucket: "nxus-studio.firebasestorage.app",
  messagingSenderId: "842403310869",
  appId: "1:842403310869:web:e06b041f4a70a087658d1c"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export default app;
