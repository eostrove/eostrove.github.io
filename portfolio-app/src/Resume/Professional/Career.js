import React from "react";
import PropTypes from 'prop-types';
import Job from "./Job";

const Career = ({ data }) => (
    <div>
        <div className='uppercase-bold'>
            Professional Experience
        </div>
        {data.map((role) => (
            <Job
                data={role}
                key={role.duration}
            />
        ))}
    </div>
);

Career.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        company: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        bullet1: PropTypes.string.isRequired,
        bullet2: PropTypes.string.isRequired,
        bullet3: PropTypes.string.isRequired,
    })),
};

Career.defaultProps = {
    data: []
};

export default Career;