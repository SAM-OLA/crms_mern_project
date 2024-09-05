import React from 'react'
import {NumericFormat} from 'react-number-format'
import styyl from './styles.modules.css';
import investmentsecuritytypecode from './data/investmentsecuritytypecode.json'
import credittypebussline from './data/credittypebussline.json'
import credittypebusslinesub from './data/credittypebusslinesub.json'
import repaymentstatuscode from './data/repaymentstatuscode.json'
import performancerepaystatuscode from './data/repaymentstatuscode.json'
import locationcode from './data/locationcode.json'
import relationshiptypecode from './data/relationshiptypecode.json'
import companysizecodes from './data/companysizecodes.json'
import fundingsourcecode from './data/fundingsourcecode.json'
import legalstatuscode from './data/legalstatuscode.json'
import feescodes from './data/feescode.json'
import { useState, useEffect} from 'react';
//import { useCookies } from 'react-cookie';


function Crms301(props) {
  let flagShow = props.flag6
  console.log("Flag "+flagShow)
  //const [cookies, setCookie, removeCookie] = useCookies(['userauth']);
  //console.log(`Cookies are ${cookies.userauth[0].username}`)
  const [searchid, setsearchid] = useState("0"); 
  const [errlabel, seterrlabel] = useState("0");
  const [sno, setsno] = useState(1);
  const [creditpurposebussline1, setcreditpurposebussline1] = useState("-- Select --");
  const [uniqidentify1, setuniqidentify1] = useState("BVN");
  const [creditpurposebusssub1, setcreditpurposebusssub1] = useState("-- Select --");
  const [uniidentifno, setuniidentifno] = useState("0");
  const [specializeloan, setspecializeloan] = useState("NO");
  const [investmentsecuritytype, setinvestmentsecuritytype] = useState("INVS001");
  const [specloanmoratorium, setspecloanmoratorium] = useState("0");
  const [creditpurpose1, setcreditpurpose1] = useState("-- Select --");
  const [creditpurposesub1, setcreditpurposesub1] = useState("-- Select --");
  const [creditlimit, setcreditlimit] = useState("0.00");
  const [outstandingamount, setoutstandingamount] = useState("0.00");
  const [feescode, setfeescode] = useState("F0003 (MANAGEMENT FEE) ");
  const [feesamount, setfeesamount] = useState("0.00");
  const [feeslist, setfeeslist] = useState([]);
  const [tenor, settenor] = useState("0");
  const [startDate, setStartDate] = useState("0"); 
  const [expiryDate, setExpiryDate] = useState("0");
  const [repayagreemode, setrepayagreemode] = useState("100");
  const [performancerepaystatus, setperformancerepaystatus] = useState("0");
  const [interestrate, setinterestrate] = useState("0.00");
  const [benefaccountno, setbenefaccountno] = useState("");
  const [location, setlocation] = useState("015");
  const [relationshiptype, setrelationshiptype] = useState("RT001");
  const [companysize, setcompanysize] = useState("CS001");
  const [directorid, setdirectorid] = useState("BVN");
  const [directorcode, setdirectorcode] = useState("");
  const [directoremail, setdirectoremail] = useState("");
  const [directorslist, setdirectorslist] = useState([]);
  const [fundsourcecategory, setfundsourcecategory] = useState("FS1000");
  const [fundsource, setfundsource] = useState("");
  const [fundpercent, setfundpercent] = useState("100");
  const [eccinumber, seteccinumber] = useState("0");
  const [legalstatus, setlegalstatus] = useState("40001");
  const [allData, setAllData] = useState(0);
  const [approved, setApproved] = useState(false);
  //const [userid, setUserid] = useState(cookies.userauth[0].username);
  const [userid, setUserid] = useState("dapo");
  //cookies.get('userauth') || null
  
  
  function initializeAll(){
      console.log("Initialize All")
      console.log(sno)
      setsno(Number(sno)+1)
      setcreditpurposebussline1("-- Select --")
      setuniqidentify1("BVN");
      setcreditpurposebusssub1("-- Select --");
      setuniidentifno("");
      setspecializeloan("NO");
      setinvestmentsecuritytype("INVS001");
      setspecloanmoratorium("0");
      setcreditpurpose1("-- Select --");
      setcreditpurposesub1("-- Select --");
      setcreditlimit("0.00");
      setoutstandingamount("0.00");
      setfeeslist([{"id":Math.random()},{"feescode" :"F0003 (MANAGEMENT FEE) "},{"feesamount":"000"}]);
      setdirectorslist([{"id":Math.random()},{"directorid":"0"},{"directorcode":"0"},{"directoremail":"0"}]);
      settenor("0");
      setStartDate("0"); 
      setExpiryDate("0");
      setrepayagreemode("100");
      setperformancerepaystatus("100");
      setinterestrate("0.00");
      setbenefaccountno("");
      setlocation("015");
      setrelationshiptype("");
      setcompanysize("");
      setfundsourcecategory("");
      setfundsource("");
      setfundpercent("100");
      seteccinumber("0");
      setlegalstatus("");
      //setUserid();
     }
   
     function handleDeleteFees(id) {
      //alert(id)
      const newfees1 = feeslist.filter((l)=>l.id !==id)
      //if(newfees1.length==0)
      //{
        //setfeeslist([{"id":Math.random},{"feescode" :"F0003 (MANAGEMENT FEE) "},{"feesamount":"000"}])
      //}
      //else
      setfeeslist(newfees1)
   }
   function handleDeleteDirectors(id) {
    const newdirectors1 = directorslist.filter((l)=>l.id !==id)
    //if(newdirectors1.length==0)
     // {
       // setdirectorslist([{"id":Math.random()},{"directorid":"0"},{"directorcode":"0"},{"directoremail":"0"}])
      //}
      //else
        setdirectorslist(newdirectors1)
 }

     const handleAddFees = (event) => {
      event.preventDefault();
      const newItem1 = {
        id:Math.random(),
        feescode,
        feesamount,
      }
      if(feescode){
        setfeeslist([...feeslist,newItem1])
        setfeescode("F0003 (MANAGEMENT FEE) ")
        setfeesamount("0.00")
      }
      //setInputs(values => ({...values, [name]: value}))
      
   } 
   
   const handleAddDirectors = (event) => {
    event.preventDefault();
    const newItem2 = {
      id:Math.random(),
      directorid,
      directorcode,
      directoremail,
    }
    if(directorcode){
      setdirectorslist([...directorslist,newItem2])
      setdirectorid("BVN")
      setdirectorcode("")
      setdirectoremail("")
    }
    //setInputs(values => ({...values, [name]: value}))
 } 

 useEffect(() => {
  fetchAllData()
  .then(response=>{
    console.log("All data fetched")
  })
}, [sno])

const fetchAllData = async () => {
  let response = await (
    await fetch(`http://localhost:5000/crms301data?userid=${userid}`)
  ).json();
  setAllData(response);
};


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Status ====")
    console.log(typeof(feeslist))
    console.log(typeof(directorslist))
    //console.log(...feeslist)
    //console.log(...directorslist)
    if((feeslist.length) === 0)
    {
      setfeeslist([{"id":Math.random},{"feescode" :"F0003 (MANAGEMENT FEE) "},{"feesamount":"000"}]);  
    }
    else if((directorslist.length) === 0)
    {
      setdirectorslist([{"id":Math.random()},{"directorid":"0"},{"directorcode":"0"},{"directoremail":"0"}]);
    }
    else
    {
    setfeeslist(Object.values(...feeslist))
    setdirectorslist(Object.values(...directorslist))
    }
    const crms301data = {sno, uniqidentify1,uniidentifno,investmentsecuritytype,creditpurpose1,creditpurposesub1,creditlimit,outstandingamount,
      feeslist,startDate,tenor,expiryDate,repayagreemode,performancerepaystatus,interestrate,benefaccountno,location,relationshiptype,
      companysize,fundsourcecategory,fundsource,fundpercent,eccinumber,legalstatus,creditpurposebussline1,
      creditpurposebusssub1,specializeloan,specloanmoratorium,directorslist,approved,userid
    }
    console.log(crms301data)
    fetch("http:localhost:5000/crms301data",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms301data)
    }).then((res)=>{
      alert("Saved Successfully")
      //window.location.reload()
    }).catch((err)=>{
      console.log(err)
      alert(err)
    })
    //alert(JSON.stringify())
    initializeAll()
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const crms301data = {sno, uniqidentify1,uniidentifno,investmentsecuritytype,creditpurpose1,creditpurposesub1,creditlimit,outstandingamount,
      feeslist,startDate,tenor,expiryDate,repayagreemode,performancerepaystatus, interestrate,benefaccountno,location,relationshiptype,
      companysize,fundsourcecategory,fundsource,fundpercent,eccinumber,legalstatus,creditpurposebussline1,
      creditpurposebusssub1,specializeloan,specloanmoratorium,directorslist,approved,userid
    }
    
    fetch(`http://localhost:5000/crms301data?userid=${userid}&id=${searchid}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms301data)
    }).then((res)=>{
      alert("Update Successfully")
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
    //alert(JSON.stringify())
  }

  const handleDelete = (event) => {
    event.preventDefault();
        
    fetch(`http://localhost:5000/crms301data/${searchid}`,{
      method:"DELETE"
    }).then((res)=>{
      alert("Delete Successfully")
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
  }

  const handleSearch = ()=>{
    let fetchrs = fetch(`http://localhost:5000/crms301data/${searchid}`)
    fetchrs.then(res=>{
      if (res.status >= 400) {
        alert("Record Does Not Exist !!!")
        console.log("Record Does Not Exist !!!")
        //throw new Error("Server responds with error!")
    }
      return res.json()
    })
      .then(d=>{
        
        console.log(d)
        setsno(d.sno)
        setcreditpurposebussline1(d.creditpurposebussline1)
        setuniqidentify1(d.uniqidentify1);
        setcreditpurposebusssub1(d.creditpurposebusssub1);
        setuniidentifno(d.uniidentifno);
        setspecializeloan(d.specializeloan);
        setinvestmentsecuritytype(d.investmentsecuritytype);
        setspecloanmoratorium(d.specloanmoratorium);
        setcreditpurpose1(d.creditpurpose1);
        setcreditpurposesub1(d.creditpurposesub1);
        setcreditlimit(d.creditlimit);
        setoutstandingamount(d.outstandingamount);
        setfeeslist(d.feeslist);
        setdirectorslist(d.directorslist);
        settenor(d.tenor);
        setStartDate(d.startDate); 
        setExpiryDate(d.expiryDate);
        setrepayagreemode(d.repayagreemode);
        setperformancerepaystatus(d.performancerepaystatus);
        setinterestrate(d.interestrate);
        setlocation(d.location);
        setrelationshiptype(d.relationshiptype);
        setcompanysize(d.companysize);
        setfundsourcecategory(d.fundsourcecategory);
        setfundsource(d.fundsource);
        setfundpercent(d.fundpercent);
        seteccinumber(d.eccinumber);
        setlegalstatus(d.legalstatus);
        setApproved(d.approved)
        //setUserid(cookies.userauth[0].username)
        setUserid("dapo")

      }
    ).catch(console.err)
    }

  if (flagShow)
  {
  return (
    <React.Fragment>
      <h2>CRMS 301 - Rendering of Investment Securities Details</h2>
      <div className="myDiv">
              <p color='#0000FF'>Search Record :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<input type="text" name="searchid" value={searchid} onChange={e =>setsearchid(e.target.value)}></input><button className='viewbtn' onClick={handleSearch}>Search</button><label name="errlable" value={errlabel} onChange={e =>seterrlabel(e.target.value)}></label></p>
      </div>
<div className="row">
  <div className="column">
      <form  className={styyl.body} onSubmit={handleSubmit}>
        
      <label htmlFor="sno">SNO :</label>
        <br></br>
      <input type="text" placeholder="Enter a serial number" required name="sno" value={sno} onChange={e =>setsno(e.target.value)}></input>
      <br></br>
      <label htmlFor="Unique Identifier type">Unique Identifier Type :</label>
      <br></br>
        <select className='formatselect' name="uniqidentify1" value={uniqidentify1} onChange={e =>setuniqidentify1(e.target.value)}>
          <option value="BVN">BVN</option>
          <option value="TIN">TIN</option>
          <option value="GOVT">GOVT</option>
        </select>
        <br></br>
        <label htmlFor="Unique Identifier No">Unique Identifier No :</label>
      <br></br>
      <input type='text' required placeholder='enter correct bvn or tin' name="uniidentifno" value={uniidentifno} onChange={e =>setuniidentifno(e.target.value)}></input>
      <br></br>
      <label htmlFor="Investment Security Type">Investment Security Type :</label>
      <br></br>
        <select className='formatselect' name="investmentsecuritytype" value={investmentsecuritytype} onChange={e =>setinvestmentsecuritytype(e.target.value)}>
        {investmentsecuritytypecode.map(investmentsecuritytypelist => (
           <option key={investmentsecuritytypelist.id}
           value={investmentsecuritytypelist.code}>{investmentsecuritytypelist.description}</option>
        ))
        }   
        </select>
        <br></br>
        <label htmlFor="Credit Purpose by Business Lines (Loan)">Credit Purpose by Business Lines (Loan) :</label>
      <br></br>
        <select className='formatselect' name="creditpurpose1" value={creditpurpose1} onChange={e =>setcreditpurpose1(e.target.value)}>
        <option key="0">-- Select --</option>
        {credittypebussline.map(credittypebusslist => (
           <option key={credittypebusslist.id}
           value={credittypebusslist.code}>{credittypebusslist.description}</option>
        ))
        }   
        </select>
        <br></br>
        <label htmlFor="Credit Purpose by Business Lines">Credit Purpose by Business Lines :</label>
      <br></br>
        <select className='formatselect' name="creditpurposesub1" value={creditpurposesub1} onChange={e =>setcreditpurposesub1(e.target.value)}>
        <option key="0">-- Select --</option>
        {credittypebusslinesub.map((credittypebusssublist) => ((credittypebusssublist.group).includes(creditpurpose1) ?
           <option key={credittypebusssublist.id}
           value={credittypebusssublist.code}>{credittypebusssublist.description}</option>
           :null
        ))
        }   
        </select>
        <br></br>
        <label htmlFor="Credit Limit">Credit Limit :</label>
      <br></br>
      <NumericFormat
      displayType='input'
      thousandSeparator={true}
      decimalSeparator="."
      required
      placeholder='enter credit limit'
      name="creditlimit"
      value={creditlimit}
      onChange={e =>setcreditlimit(e.target.value)}
      >
      </NumericFormat>
      <br></br>
      <label htmlFor="Outstanding Amount">Outstanding Amount :</label>
      <br></br>
      <NumericFormat
      readOnly={false}
      disabled={false}
      displayType='input'
      thousandSeparator={true}
      decimalSeparator="."
      placeholder='enter outstanding amount'
      name="outstandingamount" 
      value={outstandingamount}
      onChange={e =>setoutstandingamount((e.target.value))}
      >
      </NumericFormat>
      <br></br>
      <div className='myDiv1'>
      <h5><u>Fees Information</u></h5>
              &emsp;Fees Type :
              <select className='formatselect' name="feescodes" value={feescode} onChange={e =>setfeescode(e.target.value)}>
                <option key="0">-- Select --</option>
                  {feescodes.map(feescodelist => (
                    <option key={feescodelist.id}
                    value={feescodelist.code+' ('+feescodelist.description+') '}>{feescodelist.description}</option>
                      )
                      )
                              
                  } 
                  
              </select>
              <br></br>
              &emsp;Amount       :
      <NumericFormat
          displayType='input'
          thousandSeparator={true}
          decimalSeparator="."
          placeholder='enter fees amount'
          name="feesamount" 
          value={feesamount}
          onChange={e =>setfeesamount((e.target.value))}
      >
      </NumericFormat>
      <button className='smalladdbtn' onClick={handleAddFees}>Add Fees</button>
      <ul>
      {console.log("listing !!!"+feeslist)}
               {feeslist.map(feeamtlist => (
                  <li key={feeamtlist.id}>
                    {feeamtlist.feescode} - {feeamtlist.feesamount} 
                    <span style={{marginLeft:"10px", color:"red", fontWeight:"bold", cursor:"pointer"}} 
                    onClick={(event)=>handleDeleteFees(feeamtlist.id)}>
                       X remove</span></li>
               )
              )
              }
      </ul>
      </div>
      <br></br>
      <label htmlFor="Effective Date">Effective Date :</label>
      <br></br>
        <input type="date" name="startDate" placeholder="dd-mm-yyyy" value={startDate} onChange={e => setStartDate(e.target.value)} min="1997-01-01" max="2030-12-31"></input>
        <br></br>
      <label htmlFor="Tenor">Tenor :</label>
      <br></br>
      <input type='text' required placeholder='enter tenor' name="tenor" value={tenor} onChange={e =>settenor(e.target.value)}></input>
      <br></br>
      <label htmlFor="Expiry date">Expiry date :</label>
      <br></br>
       <input type="date" name="expiryDate" placeholder="dd-mm-yyyy" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} min="1997-01-01" max="2030-12-31"></input>
       <br></br>
       <label htmlFor="Repayment Agreement Mode">Repayment Agreement Mode :</label>
      <br></br>
        <select className='formatselect' name="repayagreemode" value={repayagreemode} onChange={e =>setrepayagreemode(e.target.value)}>
        {repaymentstatuscode.map(repaymentstatuslist => (
           <option key={repaymentstatuslist.id}
           value={repaymentstatuslist.code}>{repaymentstatuslist.description}</option>
        ))
        }   
        </select>
        <br></br>
       <label htmlFor="Performance Repayment Status">Performance Repayment Status :</label>
      <br></br>
        <select className='formatselect' name="performancerepaystatus" value={performancerepaystatus} onChange={e =>setperformancerepaystatus(e.target.value)}>
        {performancerepaystatuscode.map(performancerepaystatuslist => (
           <option key={performancerepaystatuslist.id}
           value={performancerepaystatuslist.code}>{performancerepaystatuslist.description}</option>
        ))
        }   
        </select>
        <br></br>
      <label htmlFor="Interest Rate">Interest Rate :</label>
      <br></br>
      <input type='text' placeholder='enter interest rate' required name="interestrate" value={interestrate} onChange={e =>setinterestrate(e.target.value)}></input>
      <br></br>
      <label htmlFor="Beneficiary Account Number">Beneficiary Account No :</label>
      <br></br>
      <input type='text' placeholder='enter beneficiary account number' required name="benefaccountno" value={benefaccountno} onChange={e =>setbenefaccountno(e.target.value)}></input>
      <br></br>
      <label htmlFor="Location of Beneficiary">Location of Beneficiary :</label>
      <br></br>
        <select className='formatselect' required name="location" value={location} onChange={e =>setlocation(e.target.value)}>
        {locationcode.map(locationlist => (
           <option key={locationlist.id}
           value={locationlist.citycode}>{locationlist.statename} - {locationlist.cityname}</option>
        ))
        }   
        </select>
        <br></br>
      <label htmlFor="Relationship Type">Relationship Type :</label>
      <br></br>
        <select className='formatselect' name="relationshiptype" value={relationshiptype} onChange={e =>setrelationshiptype(e.target.value)}>
        {relationshiptypecode.map(relationshiptypelist => (
           <option key={relationshiptypelist.id}
           value={relationshiptypelist.code}>{relationshiptypelist.description}</option>
        ))
        }   
        </select>
        <br></br>
      <label htmlFor="Company Size">Company Size :</label>
      <br></br>
        <select className='formatselect' name="companysize" value={companysize} onChange={e =>setcompanysize(e.target.value)}>
        {companysizecodes.map(companysizelist => (
           <option key={companysizelist.id}
           value={companysizelist.code}>{companysizelist.size} | {companysizelist.employees} | {companysizelist.totalassets} | {companysizelist.annualturnover}</option>
        ))
        }   
        </select>
        <br></br>
        <label htmlFor="Funding Source Category">Funding Source Category :</label>
      <br></br>
        <select className='formatselect' name="fundsourcecategory" value={fundsourcecategory} onChange={e =>setfundsourcecategory(e.target.value)}>
          <option value="LCY">LCY</option>
          <option value="FCY">FCY</option>
        </select>
        <br></br>
      <label htmlFor="Funding Source">Funding Source :</label>
      <br></br>
        <select className='formatselect' name="fundsource" value={fundsource} onChange={e =>setfundsource(e.target.value)}>
        {fundingsourcecode.map(fundingsourcelist => (
           <option key={fundingsourcelist.id}
           value={fundingsourcelist.code}>{fundingsourcelist.description}</option>
        ))
        }   
        </select>
        <br></br>
      <label htmlFor="Funding Percent">Funding Percent :</label>
      <br></br>
      <input type='text' required name="fundpercent" value={fundpercent} onChange={e =>setfundpercent(e.target.value)}></input>
      <br></br>
      <label htmlFor="ECCI Number">ECCI Number :</label>
      <br></br>
      <input type='text' placeholder='enter ecci number' required name="eccinumber" value={eccinumber} onChange={e =>seteccinumber(e.target.value)}></input>
      <br></br>
      <label htmlFor="Legal Status">Legal Status :</label>
      <br></br>
      <select className='formatselect' name="legalstatus" value={legalstatus} onChange={e =>setlegalstatus(e.target.value)}>
        {legalstatuscode.map(legalstatuslist => (
           <option key={legalstatuslist.id}
           value={legalstatuslist.code}>{legalstatuslist.description}</option>
        ))
        }   
        </select>
      <br></br>
      <label htmlFor="Classification By Bussiness lines">Classification By Bussiness lines :</label>
      <br></br>
      <select className='formatselect' name="creditpurposebussline1" value={creditpurposebussline1} onChange={e =>setcreditpurposebussline1(e.target.value)}>
      <option key="0">-- Select --</option>
        {credittypebussline.map(credittypebusslist => (
           <option key={credittypebusslist.id}
           value={credittypebusslist.code}>{credittypebusslist.description}</option>
        ))
        }   
        </select>
        <br></br>
      <label htmlFor="Classification By Bussiness lines (sub sector)">Classifi By Buss lines(sub sector) :</label>
      <br></br>
      <select className='formatselect' name="creditpurposebusssub1" selected value={creditpurposebusssub1} onChange={e =>setcreditpurposebusssub1(e.target.value)}>
      <option key="0">-- Select --</option>
        {credittypebusslinesub.map((credittypebusssublist) => ((credittypebusssublist.group).includes(creditpurposebussline1) ?
           <option key={credittypebusssublist.id}
           value={credittypebusssublist.code}>{credittypebusssublist.description}</option>
        : null))
        }   
        </select>
     <br></br>
      <label htmlFor="Specialized Loan">Specialized Loan :</label>
      <br></br>
      <select className='formatselect' name="specializeloan" value={specializeloan} onChange={e =>setspecializeloan(e.target.value)}>
          <option value="NO">NO</option>
          <option value="YES">YES</option>
        </select>
      <br></br>
      <label htmlFor="Specialized Loan Moratorium Period">Specialized Loan Moratorium Period  :</label>
      <br></br>
      <input type='text' name="specloanmoratorium" value={specloanmoratorium} onChange={e =>setspecloanmoratorium(e.target.value)}></input>
      <br></br>
      <div className='myDiv1'>
        <h5><u>Directors Information</u></h5>
              &emsp;ID Type :
              <select name="directorid" value={directorid} onChange={e =>setdirectorid(e.target.value)}>
                <option key="BVN">BVN</option>
                <option key="TIN">TIN</option>
                <option key="GOVT">GOVT</option>
              </select>
              &emsp;ID Details :
              <input type="text" value={directorcode} onChange={(e)=>setdirectorcode(e.target.value)}></input>
              <br></br>
              &emsp;&emsp;Email :
              <input type="text" value={directoremail} onChange={(e)=>setdirectoremail(e.target.value)}></input>
               &emsp;<button className='smalladdbtn2' onClick={handleAddDirectors}>Add Director</button>
                 {console.log("listing 2 !!!"+directorslist)}
               <ul>
               {directorslist.map(directlist => (
                  <li key={directlist.id}>{directlist.directorid} - {directlist.directorcode} {directlist.directoremail}<span style={{marginLeft:"10px", color:"red", fontWeight:"bold", cursor:"pointer"}} onClick={(event)=>handleDeleteDirectors(directlist.id)}> X remove</span></li>
               )
              )
              }
              </ul>
      </div>
      <br></br>
      <button className='registerbtn' type="submit">Save Data</button>
      <button className='viewbtn' type="button" onClick={handleUpdate}>Update Data</button>
      <button className='cancelbtn' type="button" onClick={handleDelete}>Delete</button>
      </form>
      </div>
  <div class="column">
    <h2><u><center>View List</center></u></h2>
    <table className='table'>
        <thead>
            <tr>
              <th>S No</th>
              <th>Security Owner</th>
              <th>Address</th>
              <th>Unique Identifier</th>
              <th>Credit Limit</th>
              <th>ID</th>
          </tr>
        </thead>
        <tbody>
            {allData.map(alllist => {
              return(
                  <tr key={alllist.id}>
                      <td>{alllist.sno}</td>
                      <td>{alllist.ownersecurity}</td>
                      <td>{alllist.addresssecurity}</td>
                      <td>{alllist.uniidentifno}</td>
                      <td>{alllist.creditlimit}</td>
                      <td>{alllist.id}</td>
                  </tr>

              )
              setsno(alllist.id+1)
            })
            
          }   
    </tbody>
    </table>
  </div>
</div>
    </React.Fragment>

  )
  }
}

export default Crms301