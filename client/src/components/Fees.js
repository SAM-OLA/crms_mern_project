import React, { Component } from 'react'
class Fees extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         monthly:[]
      }
    } 
    componentDidMount(){
        fetch("/api/monthly")
        .then(res => res.json())
        .then(monthly=>this.setState({monthly: monthly.data},()=>console.log('Monthly List Fetched',monthly)))
        
    }
  render() {
    return (
      <div>
        <h2>List of Monthly Returns</h2>
        <table>
  <thead>
  <tr>
    <th>Report Code</th>
    <th>Report Name</th>
    <th>File Operations</th>
  </tr>
  </thead>
  <tbody>
          
          {this.state.monthly.map(monthlist =>
          <tr key={monthlist.id}>
                <td>{monthlist.code}</td>
                <td>{monthlist.description}</td>
                <td>Notes</td>
          </tr>
          )
        }  
      </tbody>
      </table>
        
       </div>
    )
  }
}

export default Monthly