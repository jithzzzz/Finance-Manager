import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
/**
 * @param {json} props
 * @param {string} labelName
 * @return {void}
 */
export default function SummeryCardSm(props) {
  const {labelName, sum, align} = props;
  return (
    <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px',
      alignItems: align}}>
      <h3>{labelName}</h3>
      <h2>₹ {sum}</h2>
    </div>
  );
};

SummeryCardSm.propTypes = {
  labelName: PropTypes.string,
  sum: PropTypes.string,
  align: PropTypes.string
};
