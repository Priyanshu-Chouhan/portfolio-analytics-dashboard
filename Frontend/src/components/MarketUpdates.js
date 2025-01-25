import React from 'react';
import { marketUpdatesData } from '../data/dummyData';

const MarketUpdates = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Recent Market Updates</h2>
      <ul className="mt-4">
        {marketUpdatesData.map((update) => (
          <li key={update.id} className="border-b py-2">
            {update.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketUpdates;
