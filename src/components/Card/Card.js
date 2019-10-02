import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({ title, children }) => (
  <div className="card">
    <div className="card__title">
      <div className="card__title__text">
        {title}
      </div>
      {children}
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Card.defaultProps = {
  children: null,
};

export default Card;
