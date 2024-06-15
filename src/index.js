import React from 'react';
import ReactDOM from 'react-dom/client';
import { scaleLinear, extent, format, svg } from 'd3';
import { useData } from './useData';
import { Marks } from './Marks';

const width = window.innerWidth;
const height = window.innerHeight;

const mapLeftSpace = 65, mapTopSpace = 65;
const mapScale = 2;

const marginLeft = window.innerWidth / 2 - ((370 * mapScale) / 2) + mapLeftSpace;
const marginTop = window.innerHeight / 2 - ((410 * mapScale) / 2) - mapTopSpace;

const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const xValue = (d) => d.xvalue;
  const yValue = (d) => d.yvalue;

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, 375])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([430, 0])
    .nice();

  const siFormat = format('.2s');
  const xAxisTickFormat = (tickValue) =>
    siFormat(tickValue).replace('G', 'B');

  return (
    <svg width={width} height={height} >

        // testing background rect
      {/* <rect
          width="370" height="410"
        /> */}

      <rect
        width={width}
        height={height}
        fill='#26232C'
      />

      <g transform={`translate(${marginLeft},${marginTop}) scale(${mapScale}, ${mapScale})`}>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          polyColor={'white'}
          polyScale={51}
          polyRotate={90}
          polyStrokeColor={'black'}
          polyStrokeWidth={15}
        />
      </g>
    </svg>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
