import React, { Component } from 'react'
import DailyTradeList from './data/dailytradelist.json'

class DailyTrade extends Component {
  render() {
    return (
      <div>
        <h2>EFASS DAILY REPORTS LIST</h2>

<table>
  <thead>
  <tr>
    <th>Report Code</th>
    <th>Report Name</th>
    <th>File Operations</th>
  </tr>
  </thead>
  <tbody>
      {DailyTradeList.map(daytradelist => {
        return(
            <tr key={daytradelist.id}>
                <td>{daytradelist.code}</td>
                <td>{daytradelist.description}</td>
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

export default DailyTrade