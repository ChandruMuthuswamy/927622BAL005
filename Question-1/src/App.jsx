import { useEffect, useState } from 'react'
import { fetchStocks } from './api/stockservice'
import StockDetail  from './components/stockdetail'
import Stocklist from './components/stocklist'
import './App.css'

function App() {
  const [ stocks, setStocks] = useState([]);
  const [selectedStock , setSelectedStock] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=> {
    fetchStocks()
      .then(data => {
        setStocks(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
}, [])

if(loading) return<div>Loading...</div>
if(error) return <div>Error: {error}</div>

  return(
    <div>
      <h1>Stock Aggregator</h1>
      <ul>
         {stocks.map(stock => (
          <li key={stock.symbol} onClick={() => setSelectedStock(stock)} style={{cursor: 'pointer'}}>
            {stock.name} ({stock.symbol})
          </li>
        ))}
      </ul>
      <StockDetail stock = {selectedStock} />
    </div>
  )

}

export default App
