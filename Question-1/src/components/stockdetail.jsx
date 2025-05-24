import React from 'react';

function StockDetail({ stock }) {
  if (!stock) {
    return <div>Select a stock to see details.</div>;
  }

  return (
    <div className="stock-detail">
      <h2>{stock.name} ({stock.symbol})</h2>
      <p>Price: {stock.price}</p>
      <p>Change: {stock.change} ({stock.changePercent}%)</p>
      <p>Volume: {stock.volume}</p>
    </div>
  );
}

export default StockDetail;