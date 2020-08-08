import React from "react";
import { format } from "d3-format";
import { ChartCanvas, Chart } from "react-stockcharts";
import { BarSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { CrossHairCursor, MouseCoordinateY } from "react-stockcharts/lib/coordinates";
import { OHLCTooltip } from "react-stockcharts/lib/tooltip";
import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { last } from "react-stockcharts/lib/utils";
const StockBarCharts = ({ data: initialData }) => {
  const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor((d) => new Date(d.date));
  const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(initialData);

  const start = xAccessor(last(data));
  const end = xAccessor(data[Math.max(0, data.length - 150)]);
  const xExtents = [start, end];
  return (
    <ChartCanvas
      width={1000}
      height={400}
      margin={{ left: 80, right: 70, top: 70, bottom: 30 }}
      padding={10}
      type={"svg"}
      seriesName="Fruits"
      xExtents={xExtents}
      data={data}
      xAccessor={xAccessor}
      displayXAccessor={displayXAccessor}
      xScale={xScale}
      ratio={2}
    >
      <Chart id={1} yExtents={(d) => [0, d.volume]}>
        <XAxis axisAt="bottom" orient="bottom" />
        <YAxis axisAt="left" orient="left" />
        <MouseCoordinateY at="right" orient="right" displayFormat={format(".2f")} />
        <OHLCTooltip forChart={1} origin={[-40, 0]} />
        <BarSeries yAccessor={(d) => d.volume} />
      </Chart>

      <CrossHairCursor />
    </ChartCanvas>
  );
};

export default StockBarCharts;
