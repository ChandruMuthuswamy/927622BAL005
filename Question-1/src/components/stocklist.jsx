import React from 'react';

function StockList({ stocks, onSelect}) {
    if (!stocks.length){
        return <div>No stocks available.</div>;
    }
    <ul>
        {stocks.map(stock => (
            <li
                key={stock.symbol}
                onClick ={() => onSelect(stock)}
                style = {{ cursor: 'pointer'}}
            >
                {stock.name} ({stock.symbol})
            </li>
        ))}
    </ul>
}