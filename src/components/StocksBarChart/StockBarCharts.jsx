import React from "react";

import { scalePoint } from "d3-scale";
import { ChartCanvas, Chart } from "react-stockcharts";
import { BarSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";

const StockBarCharts = ({ data }) => {
  const data2 = [
    {
      x: "Apple",
      y: 10,
    },
    {
      x: "Banana",
      y: 15,
    },
    {
      x: "Strawberry",
      y: 20,
    },
    {
      x: "Lemon",
      y: 25,
    },
    {
      x: "Cherry",
      y: 30,
    },
    {
      x: "Peach",
      y: 35,
    },
  ];
  return (
    <ChartCanvas
      width={900}
      height={400}
      margin={{ left: 80, right: 10, top: 20, bottom: 30 }}
      type={"svg"}
      seriesName="Fruits"
      xExtents={(list) => list.map((d) => d.date)}
      data={data}
      xAccessor={(d) => d.date}
      padding={1}
      xScale={scalePoint()}
      ratio={1}
    >
      <Chart id={1} yExtents={(d) => [0, d.open]}>
        <XAxis axisAt="bottom" orient="bottom" />
        <YAxis axisAt="left" orient="left" />
        <BarSeries yAccessor={(d) => d.open} />
      </Chart>
    </ChartCanvas>
  );
};

export default StockBarCharts;
