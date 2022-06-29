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
                I am a software developer with a passion for learning and building things.
            </section>
        </section>
    )
};

export default Sidebar;