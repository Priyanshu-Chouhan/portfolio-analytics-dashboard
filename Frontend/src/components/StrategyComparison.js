import React from 'react';

const StrategyComparison = ({ portfolios }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {portfolios.map((portfolio) => (
        <div key={portfolio._id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">{portfolio.strategy}</h3>
          <p>Total Value: ${portfolio.totalValue}</p>
          <p>ROI: {portfolio.roi}%</p>
          <p>CAGR: {portfolio.cagr}%</p>
          <p>Drawdown: {portfolio.drawdown}%</p>
        </div>
      ))}
    </div>
  );
};

export default StrategyComparison;
