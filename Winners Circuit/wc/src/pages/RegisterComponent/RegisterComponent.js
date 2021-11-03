import React from "react";
import "./RegisterComponent.css";
import logo from '../logo.png';
import { withAuth0 } from "@auth0/auth0-react";
const queryString = require('query-string');

class RegisterComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            csrfToken: "",

            firstName: "",
            lastName: "",
            dateOfBirth: "",
            heightFt: "",
            heightIn: "",
            school: "",
            position: "PG"

        }

        this.handleChange = this.handleChange.bind(this);

        this.sendData = this.sendData.bind(this);

    }

    componentDidMount() {

        this.getCSRFToken();

    }

    async getCSRFToken() {

        const response = await fetch('https://winnerscircuits.com/api/v1/csrf', {

           method: "GET",
           headers: {
               Accept: "application/json",
               "Content-Type": "application/json"
           }

        });

        this.state.csrfToken = await response.json();

        console.log("Retrieved CSRF Token successfully.")

    }

    handleChange(event) {

        const target = event.target;

        const value = target.value;

        const name = target.name;

        this.setState({ [name]: value })

    }

    render() {

        return (

            <div className='signUpBackground'>
                <div className = 'logoContainer'>
                    <img src={logo} id='signUpLogo' alt='Logo'/>
                </div>
                <div className='signUpForm'>
                    <form id = 'tester'>
                        <label htmlFor="fname">First Name: </label>
                        <input type="text" name = 'firstName' onChange = { this.handleChange }/><br/>

                        <label htmlFor="lname">Last Name: </label>
                        <input type="text" name = 'lastName' onChange = { this.handleChange }/><br/>

                        <label htmlFor="birthday">Date Of Birth: </label>
                        <input type="date" id="birthday" name = 'dateOfBirth' onChange = { this.handleChange }/><br/>

                        <label htmlFor="height-ft">Height: </label>
                        <input type="value" className="height" name = "heightFt" onChange = { this.handleChange }/><span>ft</span>
                        <input type="value" className="height" name = "heightIn" onChange = { this.handleChange }/><span>in</span><br/>

                        <label htmlFor="school">School: </label>
                        <input type="text" name = "school" onChange = { this.handleChange }/><br/>

                        <label htmlFor='position'>Position:</label>
                        <select name = "position" onChange = { this.handleChange }>
                            <option value='PG'>Point Guard</option>
                            <option value='SG'>Shooting Guard</option>
                            <option value='C'>Center</option>
                            <option value='SF'>Small Forward</option>
                            <option value='PF'>Power Forward</option>
                        </select><br/>

                        <button onClick = { this.sendData } >Begin Your Journey</button>

                    </form>

                </div>

            </div>

        )

    }

    async sendData(event) {

        event.preventDefault();

        const claims = await this.props.auth0.getIdTokenClaims();

        const body = {

            authId: claims.sub,
            authName: claims.name,
            authFamilyName: claims.family_name || 'N/A',
            authGivenName: claims.given_name || 'N/A',
            email: claims.email,
            emailVerified: claims.email_verified,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dateOfBirth: this.state.dateOfBirth,
            heightFt: this.state.heightFt,
            heightIn: this.state.heightIn,
            school: this.state.school,
            position: this.state.position

        }

        await fetch("https://winnerscircuits.com/api/v1/register", {

            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "xsrf-token": this.state.csrfToken

            },
            body: JSON.stringify(body)

        });

        this.props.history.push('/feed');

    }

}
export default withAuth0(RegisterComponent);
