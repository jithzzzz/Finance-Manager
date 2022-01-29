import React from 'react';
import PropTypes from 'prop-types';
import MicroBarChart from 'react-micro-bar-chart';
/**
 * @param {JSON} props
 * @return {void}
 */
export default function MicroBarChartCard(props) {
  const {type, gcolor} = props;
  return (
    <div style={{display: 'flex', flexDirection: 'column',
      boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      padding: '15px', marginTop: '10px', marginBottom: '10px',
      borderRadius: '10px'}}>
      <div>
        <h3>{type}</h3>
      </div>
      <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
        <MicroBarChart
          width={100}
          height={50}
          data={[7, 1, 5, 6, 8, 9, 2, 4, 2, 5, 6, 8, 9, 7, 1, 5, 8, 1]}
          tooltip
          tipTemplate={(d, i, data) => d}
          tipOffset={[0, 20]}
          hoverColor="rgb(161,130,214)"
          fillColor={gcolor}
        />
      </div>
      <div>
        <h2>20034.90</h2>
        <h3 style={{color: gcolor}}>+ 30067.90</h3>
      </div>
    </div>
  );
};

MicroBarChartCard.propTypes = {
  type: PropTypes.string,
  gcolor: PropTypes.string
};

