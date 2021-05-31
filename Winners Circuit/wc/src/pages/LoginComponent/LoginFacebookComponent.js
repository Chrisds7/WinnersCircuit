
import React from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import { registerAccount } from "./LoginAccountRegister";

import { Redirect } from 'react-router-dom';

import './LoginComponent.css'

const appID = '910935036418679';

class LoginFacebookComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = { redirect: null }

        this.onSuccess = this.onSuccess.bind(this);

    }

    async onSuccess (res) {

        // Check if the user has signed in before
        const signedIn = await fetch(`http://localhost:5000/signup/${res.userID}`, {

            method: "GET",
            headers: {"Content-Type": "application/json"}

        }).then(response => {

            response.json().then(json => {

                if (json.rows[0].exists) {

                    // User has an account already, redirect to the feed page

                    this.setState({ redirect: '/feed' })

                } else {

                    // User has no account, redirect to the registration page

                    registerAccount(res.userID, 'Facebook');

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

                <FacebookLogin
                    appId = { appID }
                    autoLoad = { false }
                    callback = { this.onSuccess }
                    render = { renderProps => (

                        <button onClick = { renderProps.onClick } disabled = { renderProps.disabled }> Sign in with Facebook </button>

                    )}
                />

            </div>

        );

    }

}

export default LoginFacebookComponent;