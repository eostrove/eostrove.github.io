import React from "react";
import './css/App.css';
import './css/intro.css';
import emily from './css/images/emily.png';
import emily2 from './css/images/emily_crop.png';

function Sidebar() {
    return (
        <section className="sidebar">
            <section className="intro">
                <img className="headshot center" src={emily2} alt="" />
                <h1>Emily Ostrove</h1>
                <h2>testing</h2>
            </section>
            <section className="blurb">
                <div className="blurb-h2">
                    About
                </div>
                <div className="intro-details">
                    Hi, I'm Emily. I am a software developer and a passionate learner. I like building things. Inversely, I also like and breaking things down into tiny pieces to understand exactly how they work.
                </div>
            </section>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th className="contact-icon">
                            <a href="https://gitlab.com/emily.ostrove"><i className="fa-brands fa-github"></i></a>  
                        </th>
                        <th className="contact-icon">
                            <a href="mailto:emily.ostrove@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                        </th>
                        <th className="contact-icon">
                            <a href="https://www.linkedin.com/in/emily-ostrove/"><i className="fa-brands fa-linkedin-in"></i></a>
                        </th>
                    </tr>
                </thead>
            </table>
        </section>
    )
};

export default Sidebar;