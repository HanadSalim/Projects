import {initializeApp} from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC3vIsTEXFPdPHpaq902SegISlVfm4NB2Q",
    authDomain: "whatsapp-clone-51311.firebaseapp.com",
    projectId: "whatsapp-clone-51311",
    storageBucket: "whatsapp-clone-51311.appspot.com",
    messagingSenderId: "474220246334",
    appId: "1:474220246334:web:9ce05cb0fcf73a7057e86f"
  }

//  initialise firebase
initializeApp(firebaseConfig)


export default getFirestore()


