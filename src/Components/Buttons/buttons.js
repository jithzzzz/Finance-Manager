import React from 'react';
// import {Container, Row, Col} from 'react-bootstrap';
import './button.css';
import {IoAddSharp} from 'react-icons/io5';

/**
 * @return {void}
 */
export default function RoundAddButton() {
  return (
    <button className='btn btn-primary btn-round'><IoAddSharp/></button>
  );
};
RoundAddButton.displayName = 'Round Add Button';
