import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";

import "./styles/global-styles.scss";
import CandleChart from "./components/CandleChart/CandleChart";
import BarCharts from "./components/BarsChart/BarCharts";
function App() {
  const [currentData, setCurrentData] = useState([]);
  const [filter, setFilter] = useState("lastMonth");

  const fetchData = async () => {
    const response = await fetch(`./data/crude/${filter}.json`);
    const data = await response.json();
    setCurrentData(data);
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  return (
    <Layout>
      <h1>Victory demo</h1>
      <select name="" id="" value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="lastMonth">Last Month</option>
        <option value="lastYear">1 Year daily</option>
        <option value="lastYearWeekly">1 Year weekly</option>
        <option value="last5Days">Last 5 days</option>
      </select>
      <main>
        <div style={{ maxWidth: "50%" }}>
          <BarCharts data={currentData} />
        </div>

        <div style={{ maxWidth: "50%" }}>
          <CandleChart data={currentData} />
        </div>
      </main>
    </Layout>
  );
}

export default App;
