import React, { Component } from 'react'
import MonthlyTradeList from './data/monthlytradelist.json'

class MonthlyTrade extends Component {
  render() {
    return (
      <div>
        <h2>EFASS MONTHLY REPORTS LIST</h2>

<table>
  <thead>
  <tr>
    <th>Report Code</th>
    <th>Report Name</th>
    <th>File Operations</th>
  </tr>
  </thead>
  <tbody>
      {MonthlyTradeList.map(monthtradelist => {
        return(
            <tr key={monthtradelist.id}>
                <td>{monthtradelist.code}</td>
                <td>{monthtradelist.description}</td>
                <td>Notes</td>
            </tr>

        )
      })
    }   
    </tbody>
</table>
</div>
    )
  }
}

export default MonthlyTrade