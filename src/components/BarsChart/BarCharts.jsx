import React from "react";
import { VictoryBar, VictoryChart, createContainer } from "victory";

const BarCharts = ({ data }) => {
  const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");
  return (
    <VictoryChart
      domainPadding={10}
      containerComponent={
        <VictoryZoomVoronoiContainer
          labels={({ datum }) => `Open: ${Math.round((datum.open + Number.EPSILON) * 100) / 100}`}
        />
      }
    >
      <VictoryBar
        data={data}
        x={(datum) => new Date(datum.Date.replace(/-/g, "/"))}
        y="open"
        barRatio={0.5}
        animate={{
          duration: 1000,
          onLoad: { duration: 500 },
        }}
      />
    </VictoryChart>
  );
};

export default BarCharts;
