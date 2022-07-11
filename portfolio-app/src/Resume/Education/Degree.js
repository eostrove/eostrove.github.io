import React from "react";
import PropTypes from 'prop-types';


const Degree = ({ data }) => (
    <article className="degree-container">
      {/* <header> */}
        <h3 className="degree">{data.degree}</h3>
        <p className="edu_details">{data.details}</p>
        <p className="school"><a className="school" href={data.link}>{data.school}</a>, {data.year}</p>
      {/* </header> */}
    </article>
  );
  
  Degree.propTypes = {
    data: PropTypes.shape({
      degree: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    }).isRequired,
  };
  
  export default Degree;