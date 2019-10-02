import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({ title, navBlock, children }) => (
  <div className="card">
    <div className="card__title">
      <div className="card__title__text">
        {title}
      </div>
      {navBlock}
    </div>
    <div className="card__content">
      {children}
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  navBlock: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Card.defaultProps = {
  navBlock: null,
  children: null,
};

export default Card;
