import React from "react";
import PropTypes from 'prop-types';

const Job = ({ data }) => (
    <article className="jobs-container">
        <header>
            <h3 className="job-title">{data.company} - {data.role}</h3>
            <p className="job"></p>
            <div className="job-time">
                {data.duration}
            </div>
            <ul className="points">
                <li className="job-bullets">{data.bullet1}</li>
                <li className="job-bullets">{data.bullet2}</li>
                <li className="job-bullets">{data.bullet3}</li>
            </ul>
        </header>
    </article>
);

Job.propTypes = {
    data: PropTypes.shape({
        company: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        bullet1: PropTypes.string.isRequired,
        bullet2: PropTypes.string.isRequired,
        bullet3: PropTypes.string.isRequired,
    }).isRequired,
};

export default Job;