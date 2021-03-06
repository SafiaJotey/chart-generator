// BarChart.js
import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

function BarChart({ width, height, data }) {
  const ref = useRef();
  //rendering background
  useEffect(() => {
    d3.select(ref.current)
      .attr('viewBox', `0 0 ${width} ${height} `)
      .style('margin', 30)
      .style('background', '#f4f4f4');
  }, []);

  //rendering bars depending on data changes
  useEffect(() => {
    draw();
  }, [data]);

  //creating bar chart
  const draw = () => {
    const svg = d3.select(ref.current);
    var selection = svg.selectAll('rect').data(data);
    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, height - 100]);

    selection
      .transition()
      .duration(300)
      .attr('height', (d) => yScale(d))
      .attr('y', (d) => height - yScale(d));

    selection
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 45)
      .attr('y', (d) => height)
      .attr('width', 40)
      .attr('height', 0)
      .attr('fill', '#33adff')
      .transition()
      .duration(300)
      .attr('height', (d) => yScale(d))
      .attr('y', (d) => height - yScale(d));

    selection
      .exit()
      .transition()
      .duration(300)
      .attr('y', (d) => height)
      .attr('height', 0)
      .remove();
  };

  return (
    <div className="chart">
      <svg ref={ref}></svg>
    </div>
  );
}

export default BarChart;
