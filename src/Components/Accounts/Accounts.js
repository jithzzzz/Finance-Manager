import React from 'react';
import PropTypes from 'prop-types';
/**
 * @param {JSON} props
 * @return {void}
 */
export default function Accounts(props) {
  const {accName} = props;
  return (
    <div>
      <p style={{fontSize: '14px', fontWeight: '600'}}>{accName}</p>
    </div>
  );
};

Accounts.propTypes = {
  accName: PropTypes.string
};

