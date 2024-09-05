import React, { Component } from 'react'
import styles from './mystyles.module.css'; 
import Ffooter1 from './Footer1'
import Crms300Approval1 from './Crms300Approve'

export class CrmsApprove1 extends Component {
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
            <div className={styles.content}>
            <button className={styles.collapsible1} onClick={this.handleToggle}>CRMS 100 - Submissions for Federal Govt, State Govts, Local Govts and FCT</button>
                {/*<Ffooter flag={this.state.flag}/>*/}
            <button className={styles.collapsible1} onClick={this.handleToggle1}>CRMS 200 - CRMS 200 - Submissions for MDAs of Federal Govt, State Govts, Local Govts and FCT</button>
                <Ffooter1 flag1={this.state.flag1}/>
            <button className={styles.collapsible1} onClick={this.handleToggle}>CRMS 300 - Rendition of Borrower Credit Details (Individual and Non-Individual)</button>
                <Crms300Approval flag={this.state.flag}/>
            <button className={styles.collapsible1} onClick={this.handleToggle1}>CRMS 301 - Rendition of Investment Security Details</button>
                {/*<Ffooter1 flag1={this.state.flag1}/>*/}
            <button className={styles.collapsible1} onClick={this.handleToggle1}>CRMS 400A - Rendition of Rolled-Over Facility (Effective Date (not earlier than maturity date of exisitng facility), Tenor and Expiry Date changes only)</button>
                {/*<Ffooter1 flag1={this.state.flag1}/>*/}
            <button className={styles.collapsible1} onClick={this.handleToggle1}>CRMS 400B - Restructuring of existing facility</button>
                {/*<Ffooter1 flag1={this.state.flag1}/>*/}
            <button className={styles.collapsible1} onClick={this.handleToggle1}>CRMS 400C - Update of Outstanding Balance and Liquidation of Existing Facility</button>
                {/*<Ffooter1 flag1={this.state.flag1}/>*/}
            <button className={styles.collapsible1} onClick={this.handleToggle1}>CRMS 400D - Update of Month End Balances</button>
                {/*<Ffooter1 flag1={this.state.flag1}/>*/}
            <button className={styles.collapsible1} onClick={this.handleToggle1}>CRMS 401 - Update of Investment Securities</button>
                {/*<Ffooter1 flag1={this.state.flag1}/>*/}
            <button className={styles.collapsible1} onClick={this.handleToggle1}>CRMS 500 - Rendition of Dud Cheques</button>
                {/*<Ffooter1 flag1={this.state.flag1}/>*/}
            <button className={styles.collapsible1} onClick={this.handleToggle1}>CRMS 600 - Register Syndication Information</button>
                {/*<Ffooter1 flag1={this.state.flag1}/>*/}
            <button className={styles.collapsible1} onClick={this.handleToggle1}>CRMS 700 - Update of Migrated Records</button>
               {/*<Ffooter1 flag1={this.state.flag1}/>*/}
            <button className={styles.collapsible1} onClick={this.handleToggle1}>CRMS 700B - Update of Migrated Records (Federal Govt, State Govts, Local Govts and FCT)</button>
                {/*<Ffooter1 flag1={this.state.flag1}/>*/}                
            </div>
          </div>
          
        </div>
        
    )
  }
}

export default CrmsApprove1