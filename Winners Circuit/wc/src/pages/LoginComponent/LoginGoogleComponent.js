
import React from 'react';

import GoogleLogin from 'react-google-login';

import { registerAccount } from "./LoginAccountRegister";

import { Redirect } from 'react-router-dom';

import './LoginComponent.css'

const clientID = '828722406940-6lro5qhe5daopfll18gqjg9acbchhcos.apps.googleusercontent.com';

class LoginGoogleComponent extends React.Component  {

    constructor(props) {

        super(props);

        this.state = { redirect: null }

        this.onSuccess = this.onSuccess.bind(this);

        this.onFailure = this.onFailure.bind(this);

    }

    async onSuccess (res) {

        // Check if the user has signed in before
        const signedIn = await fetch(`http://localhost:5000/signup/${res.profileObj.googleId}`, {

            method: "GET",
            headers: {"Content-Type": "application/json"}

        }).then(response => {

            response.json().then(json => {

                if (json.rows[0].exists) {

                    // User has an account already, redirect to the feed page

                    this.setState({ redirect: '/feed' })

                } else {

                    // User has no account, redirect to the registration page

                    registerAccount(res.profileObj.googleId, 'Google');

                    this.setState({ redirect: '/register' })

                }

            });

        });

    };

    async onFailure (res) {

        console.log("Sign in has failed");

    }

    render() {

        if (this.state.redirect) {

            return <Redirect to = { this.state.redirect } />

        }

        return (

            <div>

                <GoogleLogin
                    clientId = { clientID }
                    onSuccess = { this.onSuccess }
                    onFailure = { this.onFailure }
                    cookiePolicy = { 'single_host_origin' }
                    render = { renderProps => (

                        <button onClick = { renderProps.onClick } disabled = { renderProps.disabled }> Sign in with Google </button>

                    )}
                />

            </div>

        );

    }

}

export default LoginGoogleComponent;