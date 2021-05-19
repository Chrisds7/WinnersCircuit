import React from "react";
import './loginpage.css'
import logo from '../logo.png'

    const LogInPage = () => {
        return (

        <div id = 'logInBackground'>
            <div className = 'logInDiv'>
                <img src={logo} id = 'logInLogo' alt = 'Logo'/>
                <h1 id = 'logInHeader'>Log In</h1>
                <form>
                    <input type='text' className = 'inputFields' id = 'email' placeholder ='email'></input>
                    <input type = 'text' className = 'inputFields' id = 'password' placeholder = 'password'></input>
                </form>
                <button id = 'signIn'> Sign In </button>
                <p id = 'forgotPassword'> Forgot password </p>
            </div>
        </div>
        )
}

    export default LogInPage;