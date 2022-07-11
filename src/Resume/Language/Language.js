import React from "react";
import PropTypes from 'prop-types';


const Language = ({ data }) => (
    <article className="">
        <li className="language-points">{data.language}: {data.proficiency}</li>
    </article>
  );
  
  Language.propTypes = {
    data: PropTypes.shape({
      language: PropTypes.string.isRequired,
      proficiency: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default Language;