import React, { Component } from 'react'
import QuarterList from './data/quarterlist.json'

class Quarterly extends Component {
  render() {
    return (
      <div>
        <h2>FINA QUARTERLY REPORTS LIST</h2>
<form>
<table>
  <thead>
  <tr>
    <th>Report Code</th>
    <th>Report Name</th>
    <th>File Operations</th>
  </tr>
  </thead>
  <tbody>
      {QuarterList.map(quartlist => {
        return(
            <tr key={quartlist.id}>
                <td>{quartlist.code}</td>
                <td>{quartlist.description}</td>
                <td><button>Open</button></td>
            </tr>

        )
      })
    }   
    </tbody>
</table>
</form>
</div>
    )
  }
}

export default Quarterly