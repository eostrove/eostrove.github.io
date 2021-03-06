import React from 'react';
import './css/skills.css';
import './css/education.css';

import Skills from './Resume/Skills/Skills.js';
import Education from './Resume/Education/Education.js';
import Languages from './Resume/Language/Languages.js';
import Career from './Resume/Professional/Career';

import { skills, categories } from './Resume/Skills/skillsdata.js';
import degrees from './Resume/Education/educationdata.js';
import languages from './Resume/Language/languagedata';
import roles from './Resume/Professional/professionaldata';

const Resume = () => (
    // <Main
    //   title="Resume"
    //   description="Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
    // >
    <div className="wrapper">
        <div className="main">
            <article className="post" id="resume">
                <header>
                    <h2><span>
                        Resume
                    {/* <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
                    <div className="link-container">
                    {sections.map((sec) => (
                        <h4 key={sec}>
                        <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                        </h4>))}
                    </div> */}
                    </span></h2>
                </header>
                <Education data={degrees} />
                {/* <Experience data={positions} /> */}
                <Skills skills={skills} categories={categories} />
                <Career data={roles} />
                <Languages data={languages} />
                {/* <Courses data={courses} />
                <References /> */}
                {/* <div className="uppercase-bold">
                    Download
                </div>
                <div className='language-points'>
                    there will be a link to download my resume here once it's ready 
                </div> */}
            </article>
        </div>
    </div>
            // </Main>
  );
  
  export default Resume;
  