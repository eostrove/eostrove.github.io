import React from "react";
import './css/App.css';
import './css/intro.css';

function Sidebar() {
    return (
        <section className="sidebar">
            <section className="intro">
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