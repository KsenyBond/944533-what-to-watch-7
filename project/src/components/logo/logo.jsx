import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import AppRoute from '../../const';

function Logo({isFooterLogo}) {
  return (
    <div className="logo">
      <Link to={AppRoute.MAIN} className={isFooterLogo ? 'logo__link logo__link--light' : 'logo__link'}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  isFooterLogo: PropTypes.bool,
};

export default Logo;
