import React from "react";
import './loginpage.css'
import logo from './logo.png'

    const LogInPage = () => {
        return (

        <div id = 'background'>
            <div className = 'loginDiv'>
                <img src={logo} id = 'logo' alt = 'Logo'/>
                <h1 id = 'logInHeader'>Log in</h1>
                <form>
                    <input type='text' className = 'inputFields' id = 'username' placeholder ='username'></input>
                    <input type = 'text' className = 'inputFields' id = 'password' placeholder = 'password'></input>
                </form>

            </div>
        </div>
        )
}

    export default LogInPage;