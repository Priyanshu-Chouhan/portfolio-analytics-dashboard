import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { portfolioGrowthData } from '../data/dummyData';

const Charts = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Portfolio Growth Over Time</h2>
      <LineChart width={600} height={300} data={portfolioGrowthData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Charts;
