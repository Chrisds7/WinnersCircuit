import React from 'react';
import {Link} from 'react-router-dom';
import './homepage.css'
import logo from "./logo.png";
import temp from "./temp.png";
import red1 from "./red1.png";
import red2 from "./red2.png";
import red3 from "./red3.png";
import twitter from "./twitter.png";
import instagram from "./instagram.png";

const MainPage = () => {
    return (
        <div className="flex-container">
            <p id = 'welcome'>WELCOME &nbsp; TO
                <span id = 'buttons'>
                    <Link to = '/signup' id = 'joinButton'> Join Now </Link> &nbsp;
                    <Link to = '/login'  id = 'signInButton'> Sign in </Link>
                </span>
                <span id = 'socialMedia'>
                    <img id="twitter" src = {twitter} alt = 'Twitter'/>
                    <img id="instagram" src = {instagram} alt = 'Instagram'/>
                </span>
            </p>

            <div className = 'sectionOne'>

                <div id = 'logoDiv'>
                <img id = 'logo' src={logo} alt="Logo"/>
                </div>

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

            <div className = 'sectionFour'>

                <h1>What you can do as a <span className = 'redHighlight'>Player </span> . . . </h1>
                <img className = 'redPhoto' src = {red3}/>
                <img className = 'redPhoto' src = {red1}/>
                <img className = 'redPhoto' src = {red2}/>
                <h2 id = 'lowerImageTitle1'>Branding</h2>
                <h2 id = 'lowerImageTitle2'>Opportunity</h2>
                <h2 id = 'lowerImageTitle3'>Development</h2>
                <p id = 'lowerImageText1'> <span className = 'redHighlight'> Build a personal profile & post your talent </span> </p>
                <p id = 'lowerImageText2'> Connect with coaches & scouts </p>
                <p id = 'lowerImageText3'> <span className = 'redHighlight'> Enhance your journey in basketball </span> </p>
            </div>

            <div className = 'sectionFive'>
                <h1>BEGIN YOUR JOURNEY TO THE NEXT LEVEL AND <span className = 'redHighlight'> JOIN NOW </span> </h1>
                <Link to = '/signup' id = 'signUpButton'>Sign up</Link>
                <p>Dream. Plan. <span className='redHighlight'>Win </span> </p>
            </div>

        </div>
    )
}

export default MainPage;