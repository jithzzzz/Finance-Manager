import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../Assets/images/zomato.png';
/**
 * @param {JSON} props
 * @return {void}
 */
export default function RecentCard(props) {
  const {price, title, dateandtime} = props;
  return (
    <div style={{display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', // boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      padding: '10px', marginBottom: '5px', borderRadius: '3px'
      // border: '0.5px solid #00000040'
    }}>
      <div style={{display: 'flex', justifyContent: 'space-between',
        width: '40%', alignItems: 'center'}}>
        <img src={logo} alt='logo' style={{width: '40px', height: '20px'}} />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <h2>{title}</h2>
          <h3>{dateandtime}</h3>
        </div>
      </div>
      <div style={{alignItems: 'center'}}>
        <h2>₹ {price}</h2>
      </div>
    </div>
  );
};

RecentCard.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  dateandtime: PropTypes.string
};
