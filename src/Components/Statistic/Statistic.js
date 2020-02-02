import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ value, label }) => (
  <>
    {label === 'Positive feedback' ? (
      <p>
        {label}: {value}%
      </p>
    ) : (
      <p>
        {label}: {value}
      </p>
    )}
  </>
);

Statistic.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Statistic;
