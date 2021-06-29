import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { withRouter } from 'react-router-dom';

class Auth0ProviderWithHistory extends React.Component {

    domain = process.env.REACT_APP_AUTH0_DOMAIN;

    clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

    // audience = process.env.REACT_APP_AUTH0_AUDIENCE;

    onRedirectCallback = (appState) => {

        window.history.replaceState({}, document.title, appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);

    }

    render() {

        return (

            <Auth0Provider
                domain = { this.domain }
                clientId = { this.clientId }
                redirectUri = { window.location.origin }
                onRedirectCallback = { this.onRedirectCallback }
            >
                { this.props.children }
            </Auth0Provider>

        );

    }

}

export default Auth0ProviderWithHistory;