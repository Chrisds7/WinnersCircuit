import React from "react";
import './loginpage.css'
import logo from '../logo.png'
import AppleLogin from "react-apple-login";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const googleSuccess = async (res) => {

    const body = {

        userId: res.profileObj.googleId,
        loginDomain: "Google"

    };

    const response = await fetch("http://localhost:5000/signup", {

        method: "POST",
        headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify(body)

    });

}

const facebookSuccess = async (res) => {

    const body = {

        userId: res.userID,
        loginDomain: "Facebook"

    }

    const response = await fetch("http://localhost:5000/signup", {

        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)

    });

}

const loginFailure = (err) => {
    console.log('Log in was a failure');
    console.log(err);
}

const LogInPage = () => {

    return (

        <div id='logInBackground'>

            <div className='logInDiv'>
                <img src={logo} className='logInLogo' alt='Logo'/>
                <h1 className='logInHeader'>Log In and Connect with Google</h1>

                <GoogleLogin
                    clientId={'828722406940-6lro5qhe5daopfll18gqjg9acbchhcos.apps.googleusercontent.com'}
                    render={(renderProps) => (
                        <button
                            className='googleButton'
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            Google Sign in
                        </button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={loginFailure}
                    cookiePolicy={'single_host_origin'}
                />

                <FacebookLogin
                    appId="910935036418679"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={facebookSuccess}
                />

            </div>
        </div>
    )
}

export default LogInPage;