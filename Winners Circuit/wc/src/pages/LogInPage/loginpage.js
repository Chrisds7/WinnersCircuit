import React from "react";
import './loginpage.css'
import logo from '../logo.png'
import GoogleLogin from "react-google-login";

    const googleSuccess = (res) => {
        console.log('Google sign in was a success');
        console.log(res.profileObj);
    }

    const googleFailure = (err) => {
        console.log('Google sign in was a failure');
        console.log(err);
    }


    const LogInPage = () => {
        return (

        <div id = 'logInBackground'>
            <div className = 'logInDiv'>
                <img src = {logo} className = 'logInLogo' alt = 'Logo'/>
                <h1 className = 'logInHeader'>Log In and Connect with Google</h1>
                <GoogleLogin
                  clientId = {'828722406940-6lro5qhe5daopfll18gqjg9acbchhcos.apps.googleusercontent.com'}
                  render = {(renderProps) => (
                      <button
                          className = 'googleButton'
                          onClick = {renderProps.onClick}
                          disabled = {renderProps.disabled}
                      >
                          Google Sign in
                      </button>
                  )}
                  onSuccess = {googleSuccess}
                  onFailure = {googleFailure}
                  cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
        )
}

    export default LogInPage;