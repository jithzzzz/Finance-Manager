import React from 'react';
import PropTypes from 'prop-types';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
/**
 * @param {JSON} props
 * @return {void}
 */
export default function ProgressChart(props) {
  const {percentage, total, bcolor, gcolor} = props;
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      backgroundColor: bcolor, padding: '10px', borderRadius: '5px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '68%',
        alignItems: 'center'}}>
        <div style={{width: '70px'}}>
          <CircularProgressbar value={percentage} text={`${percentage}%`}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Text size
              textSize: '20px',
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',
              // Colors
              pathColor: gcolor,
              textColor: gcolor,
              // trailColor: '#d6d6d6',
              trailColor: '#fff',
              backgroundColor: '#3e98c7'
            })}
          />
        </div>
        <div>
          <h3>Food & Beverage</h3>
          <h2>₹ {total}</h2>
        </div>
      </div>
      <div>
        <h2 style={{color: gcolor}}>{percentage}%</h2>
      </div>
    </div>
  );
};

ProgressChart.propTypes = {
  percentage: PropTypes.number,
  total: PropTypes.number,
  bcolor: PropTypes.string,
  gcolor: PropTypes.string
};


