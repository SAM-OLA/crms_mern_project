import React, { Component } from 'react'

export class TestComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname:"Dapo",
         lastName:"Olaoye",
         Gender:"Male",
         flag:false,
         flag1:false
      }
      this.handleToggle = this.handleToggle.bind(this)
      this.handleToggle1 = this.handleToggle1.bind(this)
    }
    handleToggle(){
      this.setState({flag:!this.state.flag})
      console.log(this.state.flag)
    }
    handleToggle1(){
      this.setState({flag1:!this.state.flag1})
      console.log(this.state.flag1)
    }

  render() {
    return (
        <div>
          <div>
            <h2>XML File Generated and Sent to registered Email</h2>
          </div>
          
        </div>
        
    )
  }
}

export default TestComp