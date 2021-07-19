
import React from 'react';

export default async function checkRegisteredOrRedirect({ props }) {

    const claims = await props.auth0.getIdTokenClaims();

    const response = await fetch(`https://winnerscircuits.com/api/v1/userMetadata/${claims.sub}`);

    const data = await response.json();

    if (data.user_metadata.registrationState === 'needsToRegister') {

        console.log("User is logged in but not registered. Redirecting to registration page!");

        props.history.push("/register");

    }

}