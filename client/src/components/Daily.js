import React, { Component } from 'react'
import DailyList from './data/dailylist.json'

class Daily extends Component {
  render() {
    return (
      <div>
        <footer />
        <h2>FINA DAILY REPORTS LIST</h2>

<table>
  <thead>
  <tr>
    <th>Report Code</th>
    <th>Report Name</th>
    <th>File Operations</th>
  </tr>
  </thead>
  <tbody>
      {DailyList.map(daylist => {
        return(
            <tr key={daylist.id}>
                <td>{daylist.code}</td>
                <td>{daylist.description}</td>
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

export default Daily