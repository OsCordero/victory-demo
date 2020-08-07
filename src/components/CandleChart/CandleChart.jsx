import React from "react";
import { VictoryChart, VictoryTheme, VictoryCandlestick, VictoryZoomContainer } from "victory";
const CandleChart = ({ data }) => {
  return (
    <VictoryChart domainPadding={30} theme={VictoryTheme.material} containerComponent={<VictoryZoomContainer />}>
      <VictoryCandlestick
        alignment="middle"
        candleRatio={1}
        x={(datum) => new Date(datum.Date.replace(/-/g, "/"))}
        closeLabels={(data) => Math.round((data.datum.close + Number.EPSILON) * 100) / 100}
        openLabels={(data) => Math.round((data.datum.open + Number.EPSILON) * 100) / 100}
        candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
        data={data}
      />
    </VictoryChart>
  );
};

export default CandleChart;
