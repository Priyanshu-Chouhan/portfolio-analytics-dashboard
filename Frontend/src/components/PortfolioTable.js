import React from 'react';

const PortfolioTable = ({ portfolios }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/6 py-2">Strategy</th>
            <th className="w-1/6 py-2">Total Value</th>
            <th className="w-1/6 py-2">Daily P&L</th>
            <th className="w-1/6 py-2">Win Rate</th>
            <th className="w-1/6 py-2">ROI</th>
            <th className="w-1/6 py-2">CAGR</th>
            <th className="w-1/6 py-2">Drawdown</th>
          </tr>
        </thead>
        <tbody>
          {portfolios.map((portfolio) => (
            <tr key={portfolio._id} className="text-center">
              <td className="py-2">{portfolio.strategy}</td>
              <td className="py-2">{portfolio.totalValue}</td>
              <td className="py-2">{portfolio.dailyPnL}</td>
              <td className="py-2">{portfolio.winRate}%</td>
              <td className="py-2">{portfolio.roi}%</td>
              <td className="py-2">{portfolio.cagr}%</td>
              <td className="py-2">{portfolio.drawdown}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
