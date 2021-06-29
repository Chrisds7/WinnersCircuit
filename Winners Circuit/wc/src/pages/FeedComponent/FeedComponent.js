
import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";

class FeedComponent extends React.Component {

    constructor(props) {

        super(props);

    }

    async getClaims() {

        const claims = await this.props.auth0.getIdTokenClaims();

        //TODO: Change PageKite URL here

        const namespace = 'https://winnerscircuit.pagekite.me'

        if (claims[namespace + '/newSignup']) {

            this.props.history.push('/register');

        } else {

            console.log("Not a new user, will not redirect")

        }

        console.log(claims)

    }

    render() {

        const { logout } = this.props.auth0;

        this.getClaims();

        return (

            <div>

                <p>Epic feed page</p>

                <button
                    onClick = { () => logout() }
                >Log Out</button>

            </div>

        )

    }

}

export default withAuth0(FeedComponent);