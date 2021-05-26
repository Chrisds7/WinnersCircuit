import React from "react";
import "./signuppage.css";
import logo from '../logo.png';

    const SignUpPage = () => {
        return (
            <div className = 'signUpBackground'>
                <img src = {logo} id= 'signUpLogo' alt = 'Logo'/>
                <div className = 'signUpForm'>
                    <h1>Sign up and create <span id = 'redHighlight'> your profile </span> </h1>
                    <form>

                        <label for = 'Email'>Email:</label>
                        <input name = 'Email' type='text' placeholder = 'email' id = 'signUpEmail'></input>

                        <label for='New Password'>Password:</label>
                        <input name = 'New Password' type = 'text' placeholder = 'new password' className = 'signUpPassword'></input>
                        <input type = 'text' placeholder = 'retype new password' className = 'signUpPassword'></input>

                        <label for = 'Height'>Height (in cm):</label>
                        <input name = 'Height' type = 'text' min = '0' max = '225' placeholder = 'example: 180cm'></input>

                        <label for = 'position'>Choose a position:</label>
                        <select name = 'position'>
                            <option value = 'PG'>Point Guard</option>
                            <option value = 'SG'>Shooting Guard</option>
                            <option value = 'C'>Center</option>
                            <option value = 'SF'>Small Forward</option>
                            <option value = 'PF'>Power Forward</option>
                        </select>

                        <label for = 'Team' id = 'team'>Team:</label>
                        <input name = 'Team' type = 'text' placeholder = 'Current or most recent team'></input>

                        <button id = 'join'>Join</button>
                    </form>
                </div>
            </div>
        )
    }

    export default SignUpPage;