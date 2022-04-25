import React from 'react'
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router'
import '../CSS/SignIn.css'

const SignIn = () =>{
    const navigate = useNavigate()
    const auth = getAuth() 
    const provider = new GoogleAuthProvider()
    const signInWithgoogle = () => {
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result)
            navigate('/app')
        }).catch((error)=>console.log(error))
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
            <form action="#">
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="">
                <h1>Sign in</h1>
                <div className="social-container">
                    <a><i className="fab fa-google-plus-g" onClick={signInWithgoogle}></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
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