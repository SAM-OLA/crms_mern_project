import React, { Component } from 'react'
import SemiList from './data/semiannuallist.json'

class Semiannual extends Component {
  render() {
    return (
      <div>
        <h2>FINA SEMI ANNUAL REPORTS LIST</h2>
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
      {SemiList.map(semilist => {
        return(
            <tr key={semilist.id}>
                <td>{semilist.code}</td>
                <td>{semilist.description}</td>
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

export default Semiannual