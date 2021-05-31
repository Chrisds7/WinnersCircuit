import React from "react";
import './LoginComponent.css'
import LoginGoogleComponent from "./LoginGoogleComponent";
import LoginFacebookComponent from "./LoginFacebookComponent";

class LoginComponent extends React.Component {

    constructor(props) {

        super(props)

    }

    render() {

        return (

            <div className = { this.props.show ? "modal display-block" : "modal display-none" }>

                <section className="modal-main">

                    <span>

                    <p class = 'modalText'>Sign Up or Log In</p>

                    <button id = 'closeButton' onClick = { this.props.handleClose }>X</button>

                    </span>

                    <div class = 'break'></div>

                    <small style = {{ fontSize: 15 }}>Reminder to dev team: Someone (probably Gareth) needs to style this element</small>

                    <div className='break'></div>

                    <LoginGoogleComponent/>

                    <LoginFacebookComponent/>

                    <div className='break'></div>

                </section>

            </div>

        )

    }

}

export default LoginComponent;