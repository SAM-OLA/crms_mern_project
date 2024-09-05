import React, { Component } from 'react'
import {useLocation} from 'react-router-dom';
import styles from './mystyles.module.css'; 
import Crms100 from './Crms100'
import Crms200 from './Crms200'
import Crms300 from './Crms300'
import Crms301 from './Crms301'
import Crms400A from './Crms400A'
import Crms400B from './Crms400B'
import Crms400C from './Crms400C';
import Crms400D from './Crms400D';
import Crms401 from './Crms401';
import Crms500 from './Crms500';
import Crms600 from './Crms600';
import Crms700 from './Crms700';
import CrmsConfig from './CRMSConfiguration'

export class CreditReturn1 extends Component {
    constructor(props) {
      super(props)
      const location = useLocation();
      this.state = {
         firstname:"Dapo",
         lastName:"Olaoye",
         Gender:"Male",
         flag:false,
         flag0:false,
         flag1:false,
         flag2:false,
         flag3:false,         
         flag4:false,         
         flag5:false,         
         flag6:false,         
         flag7:false,         
         flag8:false,         
         flag9:false,         
         flag10:false,         
         flag11:false,         
      }

      this.handleToggle = this.handleToggle.bind(this)
      this.handleToggle0 = this.handleToggle0.bind(this)
      this.handleToggle1 = this.handleToggle1.bind(this)
      this.handleToggle2 = this.handleToggle2.bind(this)
      this.handleToggle3 = this.handleToggle3.bind(this)
      this.handleToggle4 = this.handleToggle4.bind(this)
      this.handleToggle5 = this.handleToggle5.bind(this)
      this.handleToggle6 = this.handleToggle6.bind(this)
      this.handleToggle7 = this.handleToggle7.bind(this)
      this.handleToggle8 = this.handleToggle8.bind(this)
      this.handleToggle9 = this.handleToggle9.bind(this)
      this.handleToggle10 = this.handleToggle10.bind(this)
      this.handleToggle11 = this.handleToggle11.bind(this)
    }
    
    handleToggle(){
      this.setState({flag:!this.state.flag})
      console.log(this.state.flag)
    }
    handleToggle0(){
      this.setState({flag0:!this.state.flag0})
      console.log(this.state.flag0)
    }
    handleToggle1(){
      this.setState({flag1:!this.state.flag1})
      console.log(this.state.flag1)
    }
    handleToggle2(){
      this.setState({flag2:!this.state.flag2})
      console.log(this.state.flag2)
    }
    handleToggle3(){
      this.setState({flag3:!this.state.flag3})
      console.log(this.state.flag3)
    }
    handleToggle4(){
      this.setState({flag4:!this.state.flag4})
      console.log(this.state.flag4)
    }
    handleToggle5(){
      this.setState({flag5:!this.state.flag5})
      console.log(this.state.flag5)
    }
    handleToggle6(){
      this.setState({flag6:!this.state.flag6})
      console.log(this.state.flag6)
    }
    handleToggle7(){
      this.setState({flag7:!this.state.flag7})
      console.log(this.state.flag7)
    }
    handleToggle8(){
      this.setState({flag8:!this.state.flag8})
      console.log(this.state.flag8)
    }
    handleToggle9(){
      this.setState({flag9:!this.state.flag9})
      console.log(this.state.flag9)
    }
    handleToggle10(){
      this.setState({flag10:!this.state.flag10})
      console.log(this.state.flag10)
    }
    handleToggle11(){
      this.setState({flag11:!this.state.flag11})
      console.log(this.state.flag11)
    }
  render() {
    return (
        <div>
          <div>
          <div><h1>{location.state.data1[0]}</h1></div>
            <div className={styles.content}>
            <button className={styles.collapsible} onClick={this.handleToggle0}>CRMS Configuration Form</button>
                <CrmsConfig flag0={this.state.flag0}/>
            <button className={styles.collapsible}  onClick={this.handleToggle3}>CRMS 100 - Submissions for Federal Govt, State Govts, Local Govts and FCT</button>
                <Crms100 flag3={this.state.flag3}/>
            <button className={styles.collapsible} onClick={this.handleToggle4}>CRMS 200 - CRMS 200 - Submissions for MDAs of Federal Govt, State Govts, Local Govts and FCT</button>
                <Crms200 flag4={this.state.flag4}/>
            <button className={styles.collapsible} onClick={this.handleToggle}>CRMS 300 - Rendition of Borrower Credit Details (Individual and Non-Individual)</button>
                <Crms300 flag={this.state.flag}/>
            <button className={styles.collapsible} onClick={this.handleToggle6}>CRMS 301 - Rendition of Investment Security Details</button>
                <Crms301 flag6={this.state.flag6}/>
            <button className={styles.collapsible} onClick={this.handleToggle7}>CRMS 400A - Rendition of Rolled-Over Facility (Effective Date (not earlier than maturity date of exisitng facility), Tenor and Expiry Date changes only)</button>
                <Crms400A flag7={this.state.flag7}/>
            <button className={styles.collapsible} onClick={this.handleToggle8}>CRMS 400B - Restructuring of existing facility</button>
                <Crms400B flag8={this.state.flag8}/>
            <button className={styles.collapsible} onClick={this.handleToggle1}>CRMS 400C - Update of Outstanding Balance and Liquidation of Existing Facility</button>
                <Crms400C flag1={this.state.flag1}/>
            <button className={styles.collapsible} onClick={this.handleToggle2}>CRMS 400D - Update of Month End Balances</button>
                <Crms400D flag2={this.state.flag2}/>
            <button className={styles.collapsible} onClick={this.handleToggle10}>CRMS 401 - Update of Investment Securities</button>
                <Crms401 flag10={this.state.flag10}/>
            <button className={styles.collapsible} onClick={this.handleToggle11}>CRMS 500 - Rendition of Dud Cheques</button>
                <Crms500 flag11={this.state.flag11}/>
            <button className={styles.collapsible} onClick={this.handleToggle5}>CRMS 600 - Register Syndication Information</button>
                <Crms600 flag5={this.state.flag5}/>
            <button className={styles.collapsible}  onClick={this.handleToggle9}>CRMS 700 - Update of Migrated Records</button>
                <Crms700 flag9={this.state.flag9}/>
            <button className={styles.collapsible}>CRMS 700B - Update of Migrated Records (Federal Govt, State Govts, Local Govts and FCT)</button>
                {/*<Ffooter1 flag1={this.state.flag1}/>*/}                
            </div>
          </div>
          
        </div>
        
    )
  }
}

export default CreditReturn1