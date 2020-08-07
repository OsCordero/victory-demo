import React from "react";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { CrossHairCursor, MouseCoordinateY } from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { OHLCTooltip } from "react-stockcharts/lib/tooltip";
import { last } from "react-stockcharts/lib/utils";

const StocksCandleChart = ({ data: initialData }) => {
  const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor((d) => new Date(d.date));
  const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(initialData);
  console.log(xAccessor);

  const start = xAccessor(last(data));
  const end = xAccessor(data[Math.max(0, data.length - 150)]);
  const xExtents = [start, end];
  return (
    <ChartCanvas
      height={400}
      ratio={1}
      width={1000}
      margin={{ left: 70, right: 70, top: 10, bottom: 30 }}
      type={"svg"}
      seriesName="MSFT"
      data={data}
      xScale={xScale}
      xAccessor={xAccessor}
      displayXAccessor={displayXAccessor}
      xExtents={xExtents}
    >
      <Chart id={1} yExtents={[(d) => [d.high, d.low]]}>
        <XAxis axisAt="bottom" orient="bottom" />
        <YAxis axisAt="right" orient="right" ticks={5} />
        <MouseCoordinateY at="right" orient="right" displayFormat={format(".2f")} />
        <CandlestickSeries />
        <OHLCTooltip forChart={1} origin={[-40, 0]} />
      </Chart>

      <CrossHairCursor />
    </ChartCanvas>
  );
};

export default StocksCandleChart;
