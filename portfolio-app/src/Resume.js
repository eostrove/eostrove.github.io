import React from 'react';
import { Link } from 'react-router-dom';
import './css/skills.css';

import Skills from './Resume/Skills/Skills.js';
import Education from './Resume/Education/Education.js';

import { skills, categories } from './Resume/Skills/skillsdata.js';
import degrees from './Resume/Education/educationdata.js';

const Resume = () => (
    // <Main
    //   title="Resume"
    //   description="Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
    // >
      <article className="post" id="resume">
        <header>
          <div className="title">
            {/* <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
            <div className="link-container">
              {sections.map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>))}
            </div> */}
  
          </div>
        </header>
        <Education data={degrees} />
        {/* <Experience data={positions} /> */}
        <Skills skills={skills} categories={categories} />
        {/* <Courses data={courses} />
        <References /> */}
  
      </article>
    // </Main>
  );
  
  export default Resume;
  