import {initializeApp} from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyC3vIsTEXFPdPHpaq902SegISlVfm4NB2Q",
    authDomain: "whatsapp-clone-51311.firebaseapp.com",
    projectId: "whatsapp-clone-51311",
    storageBucket: "whatsapp-clone-51311.appspot.com",
    messagingSenderId: "474220246334",
    appId: "1:474220246334:web:9ce05cb0fcf73a7057e86f"
  };


  //  initialise firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();

export const auth = getAuth() 
const provider = new GoogleAuthProvider()
export const signInWithgoogle = () => {
  // window.open("localhost:3000","","toolbar=0,location=0,menubar=1,scrollbars=1,resizable=1")
  signInWithPopup(auth,provider).then((result)=>{
    console.log(result)
  }).catch((error)=>console.log(error))
}
