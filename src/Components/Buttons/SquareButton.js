import React from 'react';
import PropTypes from 'prop-types';
/**
 * @param {JSON} props
 * @return {void}
 */
export default function SquareButton(props) {
  const {name} = props;
  return (
    <button className='squarbutton'>{name}</button>
  );
};

SquareButton.propTypes = {
  name: PropTypes.string
};
