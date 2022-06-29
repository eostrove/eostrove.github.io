import React from "react";
import './css/App.css';
import './css/intro.css';
import emily from './css/images/emily.png';
import emily2 from './css/images/emily_crop.png';

function Sidebar() {
    return (
        <section className="sidebar">
            <section className="intro">
                <img className="headshot" src={emily2} alt="" />
                <h1>Emily Ostrove</h1>
                <div className="email">emily.ostrove@gmail.com</div>
                <br></br>
            </section>
            <section className="blurb">
                <div className="blurb-h2">
                    About
                </div>
                <div className="intro-details">
                    I am a software developer with a passion for learning. 
                    I spent the past 5 years at Amazon working in e-commerce, 
                    where I was surround by tech, but not literate in the technology. 
                    I finally decided to take the plunge and learn how to code and 
                    it's been a blast. I'm beyond excited to take the next step
                    in my tech career as a Software Developer.
                </div>
            </section>
        </section>
    )
};

export default Sidebar;