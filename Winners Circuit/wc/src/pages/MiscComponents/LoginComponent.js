import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import '../Homepage/homepage.css'

class LoginComponent extends React.Component {

    render() {

        const { loginWithRedirect } = this.props.auth0;

        return (

            <button
                type = 'button'
                id = 'signInButton'
                onClick = { () => loginWithRedirect({ appState: { targetUrl: '/feed' } }) }
            >
                Sign up / Log in
            </button>

        )

    }

}

export default withAuth0(LoginComponent);