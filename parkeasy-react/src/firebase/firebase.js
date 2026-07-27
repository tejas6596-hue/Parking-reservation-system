import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlZ624_gsm3ZkpTnxzDwYaZaR8OFImimg",
  authDomain: "parkeasy-56150.firebaseapp.com",
  projectId: "parkeasy-56150",
  storageBucket: "parkeasy-56150.firebasestorage.app",
  messagingSenderId: "283894323899",
  appId: "1:283894323899:web:6809dda366fbac1e20a79e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});