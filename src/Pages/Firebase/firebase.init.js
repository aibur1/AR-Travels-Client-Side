import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confiq";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;