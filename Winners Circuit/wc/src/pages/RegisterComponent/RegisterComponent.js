import React from "react";
import "./RegisterComponent.css";
import logo from '../logo.png';
import { useHistory } from 'react-router-dom';

class RegisterComponent extends React.Component {
   // props;

    constructor(props) {

        super(props);

    }

    render() {

        return (

            <div className='signUpBackground'>
                <img src={logo} id='signUpLogo' alt='Logo'/>
                <div className='signUpForm'>
                    <form>
                        <label htmlFor="fname">First Name: </label>
                        <input type="text"/><br/>

                        <label htmlFor="lname">Last Name: </label>
                        <input type="text"/><br/>

                        <label htmlFor="birthday">Date Of Birth: </label>
                        <input type="date" id="birthday" name="birthday"/><br/>

                        <label htmlFor="height-ft">Height: </label>
                        <input type="text" className="height"/><span>ft</span>
                        <input type="text" className="height"/><span>in</span><br/>

                        <label htmlFor="school">School: </label>
                        <input type="text"/><br/>

                        <label htmlFor='position'>Position:</label>
                        <select name='position'>
                            <option value='PG'>Point Guard</option>
                            <option value='SG'>Shooting Guard</option>
                            <option value='C'>Center</option>
                            <option value='SF'>Small Forward</option>
                            <option value='PF'>Power Forward</option>
                        </select><br/>

                        <button onClick={() => { this.sendData() }} >Begin Your Journey</button>
                    </form>
                </div>
            </div>

        )

    }

    sendData(){
        this.props.history.push('/feed');

        //TODO post request down below in this function 
    }

}
export default RegisterComponent;
