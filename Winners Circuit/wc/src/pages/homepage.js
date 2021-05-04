import React from 'react';
import './homepage.css'
import logo from "./logo.png";
import star from './star.png';

    const MainPage = () => {
        return (
            <div className="App">
                <img id = 'logo' src={logo} alt="Logo"/>
                <div className = 'left'>
                    <p> Dream. &nbsp; Plan. &nbsp; <span id = 'win'>Win</span></p>
                    <div className= 'textBoxes'>
                        <h3> CONNECT WITH <span className = 'bold'>PLAYERS & COACHES </span></h3>
                        <h3> SEARCH FOR <span className = 'bold'>OPPORTUNITIES </span></h3>
                        <h3> BUILD YOUR <span className = 'bold'>PERSONAL BRAND</span></h3>
                    </div>
                </div>

                <div className = 'right'>
                    <p id = 'buttonBorder'>
                        <button id = 'joinButton'>Join Now</button> &nbsp; <button id = 'signInButton'>Sign in</button>
                    </p>
                </div>
            </div>
        )
}

export default MainPage;