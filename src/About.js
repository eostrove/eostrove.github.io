import React from "react";
import './css/about.css';
import stormking from './css/images/stormking.jpeg';

function About() {
    return (
        <div className="wrapper">
            <div className="main">
            <h2><span>
                About
            </span></h2>
                <div className="about-content">
                    I am a software developer with a passion for learning. 
                    I spent the past 5 years at Amazon working in e-commerce, 
                    where I was surrounded by tech, but not literate in the technology. I was curious to learn more.
                    I finally decided to take the plunge and learn how to code and 
                    haven't looked back since. I'm beyond excited to take my tech career to the next level as a Software Developer.
                </div>
                <div className="uppercase-bold">
                    things I enjoy
                </div>
                <ul className="about-content">
                    <li>trying out new recipes</li>
                    <li>learning new languages (currently Spanish)</li>
                    <li>exploring the Pacific Nothwest</li>
                    <li>latin dance, specifically Salsa and Bachata</li>
                    <li>podcasts and audiobooks</li>
                    <li>tea & cookies</li>
                    <li>when CSS works as you intended</li>
                    <li>cat memes</li>
                    <li>swimming in alpine lakes</li>
                    <li>the smell right after it stops raining</li>
                    <li>SciFi tv series </li>
                    <li>travel</li>
                </ul>
                {/* <div className="uppercase-bold">
                    proof that I enjoy at least one of these things
                </div> */}
                <div>
                    <img className="about-image center" src={stormking}></img>
                </div>
            </div>
        </div>
    )
};

export default About;