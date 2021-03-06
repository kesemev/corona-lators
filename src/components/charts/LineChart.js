import "../../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, XAxis, YAxis, ChartLabel, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import React from 'react';

export default class Example extends React.Component {
    state = {
      useCanvas: false
    };
    render() {
      const {useCanvas} = this.state;
      const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
      const Line = LineSeries;
      return (
        <div>

          <XYPlot width={700} height={500}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <ChartLabel 
              text="X Axis"
              className="alt-x-label"
              includeMargin={false}
              xPercent={0.025}
              yPercent={1.01}
              />
  
            <ChartLabel 
              text="Y Axis"
              className="alt-y-label"
              includeMargin={false}
              xPercent={0.06}
              yPercent={0.06}
              style={{
                transform: 'rotate(-90)',
                textAnchor: 'end'
              }}
              />
            <Line
              className="first-series"
              data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
            />
            <Line 
              className="second-series" 
              data={[{x: 1, y: 7}, {x: 2, y: 8}, {x: 3, y: 6}, {x: 4, y: 7}]} />
            <Line
              className="third-series"
              curve={'curveMonotoneX'}
              data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
              strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
            />
          </XYPlot>
        </div>
      );
    }
  }