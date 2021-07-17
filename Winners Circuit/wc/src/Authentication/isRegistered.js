
import React from 'react';

export default async function checkRegisteredOrRedirect({ props }) {

    const claims = await props.auth0.getIdTokenClaims();

    // TODO: Make this an environment variable

    const namespace = 'https://www.winnerscircuits.com/';

    const customClaim = namespace + "registration";

    if (claims[customClaim] === 'needsToRegister') {

        console.log("Logged in but not registered, needs to be redirected!");

        props.history.push("/register");

    }

}