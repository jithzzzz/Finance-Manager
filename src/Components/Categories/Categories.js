import React from 'react';
import PropTypes from 'prop-types';
/**
 * @param {JSON} props
 * @return {void}
 */
export default function Categories(props) {
  const {cName, cColor} = props;
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div style={{backgroundColor: cColor,
        borderRadius: '50%', height: '10px', width: '10px'}}></div>
      <div style={{marginLeft: '10px', fontSize: '14px', fontWeight: '600'}}>
        {cName}
      </div>
    </div>
  );
};

Categories.propTypes = {
  cName: PropTypes.string,
  cColor: PropTypes.string
};
