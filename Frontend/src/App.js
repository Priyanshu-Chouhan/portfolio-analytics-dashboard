import React from 'react';
import Charts from './components/Charts';
import MetricsCard from './components/MetricsCard';
import MarketUpdates from './components/MarketUpdates';

function App() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Portfolio Analytics Dashboard</h1>
      <Charts />
      <MetricsCard />
      <MarketUpdates />
    </div>
  );
}

export default App;
