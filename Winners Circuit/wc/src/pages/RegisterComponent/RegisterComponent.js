import React from "react";
import "./RegisterComponent.css";
import logo from '../logo.png';
import { useHistory } from 'react-router-dom';
import {registerAccount} from "../LoginComponent/LoginAccountRegister";

class RegisterComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            firstName: "",
            lastName: "",
            dateOfBirth: "",
            heightFt: "",
            heightIn: "",
            school: "",
            position: ""

        }

        this.handleChange = this.handleChange.bind(this);

        this.sendData = this.sendData.bind(this);

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
                <img src={logo} id='signUpLogo' alt='Logo'/>
                <div className='signUpForm'>
                    <form>
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

        this.props.history.push('/feed');

        const body = {

            // TODO: Change the userId to work with our authentication flow
            userId: "12346",
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dateOfBirth: this.state.dateOfBirth,
            heightFt: this.state.heightFt,
            heightIn: this.state.heightIn,
            school: this.state.school,
            position: this.state.position

        }

        console.log(body);

        const response = await fetch("http://localhost:5000/register", {

            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)

        });

    }

}
export default RegisterComponent;
