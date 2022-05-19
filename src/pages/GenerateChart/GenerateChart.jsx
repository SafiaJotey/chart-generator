import React, { useState } from 'react';
import BarChart from '../../components/BarChart/Barchart';

const GenerateChart = () => {
  //state declaring
  const [data, setData] = useState([57, 24, 14, 37, 32, 10, 68, 50, 54, 87]);
  // function for creating random data
  const randomData = () => {
    const data = Array.from(
      {
        length: 10,
      },
      () => Math.floor(Math.random() * 100)
    );
    setData(data);
  };

  //declaring variable for chart
  var height = 500;
  var width = 500;
  var barwidth = 35;
  var barOffset = 5;

  return (
    <div style={{ width: '600px' }}>
      <h2 style={{ color: '#33adff', margin: '5px 30px 0' }}>Bar Chart</h2>

      <BarChart
        width={width}
        height={height}
        barwidth={barwidth}
        barOffset={barOffset}
        data={data}
      />
      <button
        style={{ background: '#33adff', margin: '5px 30px 0' }}
        onClick={randomData}
      >
        Create new chart
      </button>
    </div>
  );
};

export default GenerateChart;
