import {initializeApp} from "firebase/app";
import {  
  getFirestore,
   query, 
   getDocs, 
   collection, 
   where, 
   addDoc, } from "@firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC3vIsTEXFPdPHpaq902SegISlVfm4NB2Q",
    authDomain: "whatsapp-clone-51311.firebaseapp.com",
    projectId: "whatsapp-clone-51311",
    storageBucket: "whatsapp-clone-51311.appspot.com",
    messagingSenderId: "474220246334",
    appId: "1:474220246334:web:9ce05cb0fcf73a7057e86f"
  }

//  initialise firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider()

// const logInWithEmailAndPassword = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// }

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
    alert("Account successfully created")
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// }

// const logout = () => {
//   signOut(auth);
// }

export {
  auth,
  db,
  provider,
  // logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  // sendPasswordReset,
  // logout
}

export default db

