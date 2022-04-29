import React, { useContext } from 'react'
import {onAuthStateChanged, updateProfile} from "firebase/auth"
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from 'react-router'
import '../CSS/SignIn.css'
import { db,auth, registerWithEmailAndPassword, logInWithEmailAndPassword, signInWithgoogle } from '../firebase'
import { UserContext } from '../context/userContext'

const SignIn = () =>{
    const [context, setContext] = useContext(UserContext)
    const navigate = useNavigate()
     onAuthStateChanged(auth, (user) => {
        if (user) {
            if(user.displayName===null){
                update(user)
            }else{
                setContext({
                    uId:user.uid,
                    uProfile:user.photoURL,
                    uDisplayName:user.displayName
                })
                navigate('/app')
            }  
        } 
    });

    async function update(user){
        const q = query(collection(db,'users'), where("uid","==",user.uid))
        const docs = await getDocs(q)
        docs.forEach((doc)=>{
            updateProfile(user,{
            displayName:doc.data().name, photoURL:doc.data().photoUrl
            }).then(()=>{
                    console.log('updated successfully')
                    setContext({
                        uId:user.uid,
                        uProfile:user.photoURL,
                        uDisplayName:user.displayName
                    })
                    navigate('/app')
                }).catch((error)=>{console.log(error)})
        })
    }

    async function registerUser(e){
        e.preventDefault();
        let cName = document.getElementById("cn").value;
        let cEmail = document.getElementById("ce").value;
        let cPass = document.getElementById("cp").value;
        registerWithEmailAndPassword(cName,cEmail,cPass)
    }
    function logIn(e){
        e.preventDefault()
        let sEmail = document.getElementById("se").value;
        let sPass = document.getElementById("sp").value;
        logInWithEmailAndPassword(sEmail,sPass)
    }
    function signUp(){
        document.getElementById('container').classList.add("right-panel-active");
    }
    function signIn(){
        document.getElementById('container').classList.remove("right-panel-active");
    }

    return(
    <div className='body'>
        <div className="container" id="container">
        <div className="form-container sign-up-container">
            <form >
                <h1>Create Account</h1>
                <input id="cn" type="text" placeholder="Name" />
                <input id="ce" type="email" placeholder="Email" />
                <input id="cp" type="password" placeholder="Password" />
                <button onClick={registerUser}>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="">
                <h1>Sign in</h1>
                <div className="social-container">
                    <a><i className="fab fa-google-plus-g" onClick={signInWithgoogle}></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" id='se' />
                <input type="password" placeholder="Password" id='sp' />
                <a href="">Forgot your password?</a>
                <button onClick={logIn}>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" onClick={signIn}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your details and start journey with us</p>
                    <button className="ghost" onClick={signUp}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>


    </div>)
}

export default SignIn