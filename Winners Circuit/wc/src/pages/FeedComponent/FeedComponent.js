
import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import isRegistered from "../../Authentication/isRegistered";
import checkRegisteredOrRedirect from "../../Authentication/isRegistered";

class FeedComponent extends React.Component {

    constructor(props) {

        super(props);



    }

    render() {

        const { logout } = this.props.auth0;

        checkRegisteredOrRedirect(this);

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