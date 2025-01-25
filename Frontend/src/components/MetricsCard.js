import React, { useState, useEffect } from 'react';

const MetricsCard = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      const response = await fetch('http://localhost:5000/api/portfolio/data');
      const data = await response.json();
      setMetrics(data);
    };
    
    fetchMetrics();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Strategy Performance Metrics</h2>
      <table className="table-auto w-full text-left mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Strategy</th>
            <th>Total Value</th>
            <th>Daily P&L</th>
            <th>Win Rate</th>
            <th>ROI</th>
            <th>CAGR</th>
            <th>Drawdown</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric) => (
            <tr key={metric._id}>
              <td className="p-2">{metric.strategy}</td>
              <td>{metric.totalValue}</td>
              <td>{metric.dailyPL}</td>
              <td>{metric.winRate}</td>
              <td>{metric.ROI}</td>
              <td>{metric.CAGR}</td>
              <td>{metric.drawdown}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MetricsCard;
