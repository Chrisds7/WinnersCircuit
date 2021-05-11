import React from 'react';
import './homepage.css'
import logo from "./logo.png";
import temp from "./temp.png";

const MainPage = () => {
    return (
        <div className="flex-container">
            <p id = 'welcome'>WELCOME &nbsp; TO
                <span id = 'buttons'> <button id = 'joinButton'>Join Now</button> &nbsp; <button id = 'signInButton'>Sign in</button> </span>
            </p>

            <div className = 'sectionOne'>

                <img id = 'logo' src={logo} alt="Logo"/>
                <div className = 'textBoxes'>
                    <h3> CONNECT WITH <span className = 'bold'>PLAYERS & COACHES </span></h3>
                    <h3> SEARCH FOR <span className = 'bold'>OPPORTUNITIES </span></h3>
                    <h3> BUILD YOUR <span className = 'bold'>PERSONAL BRAND</span></h3>
                </div>
            </div>

            <div className = 'sectionTwo'>

                <div className='sectionTwoLeft'>
                    <iframe
                        src = 'https://www.youtube.com/embed/RF1sr3bvwQg?controls=1' allow = 'fullscreen'>
                    </iframe>
                </div>

                <div className= 'sectionTwoRight'>
                    <p id = 'white'>Our</p>
                    <p id = 'red'> Mission</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            <div className= 'sectionThree'>

                <div className = 'sectionThreeLeft'>
                    <h1>What you can do as a <span className = 'redHighlight'>Coach </span> . . .</h1>
                    <ul>
                        <li>INTERACT WITH <span id = 'redHighlight'>TOP RECRUITS </span> </li>
                        <li>ORGANIZE RECRUITING INFORMATION THROUGH THE <span className= 'redHighlight'> PLATFORM </span> </li>
                        <li>DEVELOP CONNECTIONS THROUGHOUT THE <span className = 'redHighlight'>BASKETBALL WORLD </span> </li>
                        <li>GET THE <span className = 'redHighlight'>UPPER HAND </span> </li>
                    </ul>
                </div>

                <div className = 'sectionThreeRight'>
                    <img id = 'tempPhoto' src={temp}/>
                </div>
            </div>


        </div>
    )
}

export default MainPage;