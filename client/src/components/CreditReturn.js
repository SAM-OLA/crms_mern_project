import React, { useState, Component } from 'react'
import { useLocation} from 'react-router-dom';
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

function CreditReturn() {
  const location = useLocation();
  const logdata = location.state;
  const [flag, setFlag] = useState(false);
  const [flag0, setFlag0] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  const [flag6, setFlag6] = useState(false);
  const [flag7, setFlag7] = useState(false);
  const [flag8, setFlag8] = useState(false);
  const [flag9, setFlag9] = useState(false);
  const [flag10, setFlag10] = useState(false);       
  const [flag11, setFlag11] = useState(false);

   function handleToggle(){
      setFlag(!flag)
      console.log(flag)
    }
    function handleToggle0(){
      setFlag0(!flag0)
      console.log(flag0)
    }
    function handleToggle1(){
      setFlag1(!flag1)
      console.log(flag1)
    }
    function handleToggle2(){
      setFlag2(!flag2)
      console.log(flag2)
    }
    function handleToggle3(){
      setFlag3(!flag3)
      console.log(flag3)
    }
    function handleToggle4(){
      setFlag4(!flag)
      console.log(flag4)
    }
    function handleToggle5(){
      setFlag5(!flag5)
      console.log(flag5)
    }
    function handleToggle6(){
      setFlag6(!flag6)
      console.log(flag6)
    }
    function handleToggle7(){
      setFlag7(!flag7)
      console.log(flag7)
    }
    function handleToggle8(){
      setFlag8(!flag8)
      console.log(flag8)
    }
    function handleToggle9(){
      setFlag9(!flag9)
      console.log(flag9)
    }
    function handleToggle10(){
      setFlag10(flag10)
      console.log(flag10)
    }
    function handleToggle11(){
      setFlag11(!flag11)
      console.log(flag11)
    }
  
    return (
        <div>
          <div>
          <div><h3>Current User - {logdata.username} Email - {logdata.email}</h3></div>
            <div className={styles.content}>
            <button className={styles.collapsible} onClick={handleToggle0}>CRMS Configuration Form</button>
                <CrmsConfig flag0={flag0}/>
            <button className={styles.collapsible}  onClick={handleToggle3}>CRMS 100 - Submissions for Federal Govt, State Govts, Local Govts and FCT</button>
                <Crms100 flag3={flag3}/>
            <button className={styles.collapsible} onClick={handleToggle4}>CRMS 200 - CRMS 200 - Submissions for MDAs of Federal Govt, State Govts, Local Govts and FCT</button>
                <Crms200 flag4={flag4}/>
            <button className={styles.collapsible} onClick={handleToggle}>CRMS 300 - Rendition of Borrower Credit Details (Individual and Non-Individual)</button>
                <Crms300 flag={flag} username={logdata.username} usermail={logdata.email} userstatus={logdata.authorizer}/>
            <button className={styles.collapsible} onClick={handleToggle6}>CRMS 301 - Rendition of Investment Security Details</button>
                <Crms301 flag6={flag6}/>
            <button className={styles.collapsible} onClick={handleToggle7}>CRMS 400A - Rendition of Rolled-Over Facility (Effective Date (not earlier than maturity date of exisitng facility), Tenor and Expiry Date changes only)</button>
                <Crms400A flag7={flag7}/>
            <button className={styles.collapsible} onClick={handleToggle8}>CRMS 400B - Restructuring of existing facility</button>
                <Crms400B flag8={flag8}/>
            <button className={styles.collapsible} onClick={handleToggle1}>CRMS 400C - Update of Outstanding Balance and Liquidation of Existing Facility</button>
                <Crms400C flag1={flag1}/>
            <button className={styles.collapsible} onClick={handleToggle2}>CRMS 400D - Update of Month End Balances</button>
                <Crms400D flag2={flag2}/>
            <button className={styles.collapsible} onClick={handleToggle10}>CRMS 401 - Update of Investment Securities</button>
                <Crms401 flag10={flag10}/>
            <button className={styles.collapsible} onClick={handleToggle11}>CRMS 500 - Rendition of Dud Cheques</button>
                <Crms500 flag11={flag11}/>
            <button className={styles.collapsible} onClick={handleToggle5}>CRMS 600 - Register Syndication Information</button>
                <Crms600 flag5={flag5}/>
            <button className={styles.collapsible}  onClick={handleToggle9}>CRMS 700 - Update of Migrated Records</button>
                <Crms700 flag9={flag9}/>
            <button className={styles.collapsible}>CRMS 700B - Update of Migrated Records (Federal Govt, State Govts, Local Govts and FCT)</button>
                {/*<Ffooter1 flag1={this.state.flag1}/>*/}                
            </div>
          </div>
          
        </div>
        
    )
  
}

export default CreditReturn