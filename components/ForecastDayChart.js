import React, { Component } from "react";
import Chart from "chart.js";
import styled from "styled-components";

const ChartWrap = styled.div`
  max-width: 100%;
  width: 800px;
  margin: 0 auto;
`;

class ForecastDayChart extends Component {
  chartRef = React.createRef();
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Min", "Max"],
        datasets: []
      },
      options: {}
    });
  }
  render() {
    return (
      <React.Fragment>
        <ChartWrap>
          <canvas id="myChart" ref={this.chartRef} />
        </ChartWrap>
      </React.Fragment>
    );
  }
}

export default ForecastDayChart;
