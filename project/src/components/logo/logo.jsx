import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

function Logo({isFooterLogo}) {
  return (
    <div className="logo">
      <Link to="/" className={isFooterLogo ? "logo__link logo__link--light" : "logo__link"}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  isFooterLogo: PropTypes.bool
};

export default Logo;
