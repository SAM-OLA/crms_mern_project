import React, { Component } from 'react'
class viewcrms300 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         crms300:[]
      }
    } 
    componentDidMount(){
        fetch("http://54.201.160.102:5000/crms300data")
        .then(res => res.json())
        .then(crms300=>this.setState({crms300: crms300.data},()=>console.log('crms300 data List Fetched',crms300)))
        
    }
  render() {
    return (
      <div>
        <h2>List of crms300 Returns</h2>
        <table>
  <thead>
  <tr>
    <th>Report Code</th>
    <th>Report Name</th>
    <th>File Operations</th>
  </tr>
  </thead>
  <tbody>
          
          {this.state.crms300.map(crms300list =>
          <tr key={crms300list.sno}>
                <td>{crms300list.uniqidentify1}</td>
                <td>{crms300list.uniidentifno}</td>
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

export default viewcrms300