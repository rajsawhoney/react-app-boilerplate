import React from 'react'
import TransactionsTable from '../tables/TransactionsTable'
import './WalletTransactions.css'

const WalletTransactions = (props) => {
  return (
    <div className="wallet__transactions__container">
      <div className="wallet__transactions__filters">
          <h4>Filter By:</h4>
          <span>Processing</span>
          <span>Pending</span>
          <span>Success</span>
          <span>Intermediate</span>
          <span>Refunded</span>
          <span>Failed</span>
      </div>
      <div className="wallet__transactions__contents">
          <TransactionsTable/>
      </div>
    </div>
  )
}

export default WalletTransactions
