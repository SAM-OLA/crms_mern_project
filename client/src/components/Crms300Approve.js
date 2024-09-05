import React from 'react'
import {useNavigate} from "react-router-dom";
import {NumericFormat} from 'react-number-format'
import styyl from './styles.modules.css';
import credittypecode from './data/credittypecode.json'
import credittypebussline from './data/credittypebussline.json'
import credittypebusslinesub from './data/credittypebusslinesub.json'
import repaymentstatuscode from './data/repaymentstatuscode.json'
import locationcode from './data/locationcode.json'
import relationshiptypecode from './data/relationshiptypecode.json'
import companysizecodes from './data/companysizecodes.json'
import fundingsourcecode from './data/fundingsourcecode.json'
import legalstatuscode from './data/legalstatuscode.json'
import securetypecode from './data/securetypecode.json'
import bankscode from './data/bankscode.json'
import feescodes from './data/feescode.json'
import { useState, useEffect} from 'react';


function Crms300Approve(props) {
  let flagShow = props.flag
  console.log("Flag "+flagShow)
  const username = props.username
  const useremail = props.usermail
  const userstatus = props.userstatus
  console.log("Flag "+flagShow)
  console.log("Name "+username)
  console.log("EMAIL "+useremail)
  console.log("AUTHORIZER "+userstatus)

  const [searchid, setsearchid] = useState(""); 
  const [errlabel, seterrlabel] = useState("");
  const [sno, setsno] = useState(1);
  const [creditpurposebussline1, setcreditpurposebussline1] = useState("-- Select --");
  const [uniqidentify1, setuniqidentify1] = useState("BVN");
  const [creditpurposebusssub1, setcreditpurposebusssub1] = useState("-- Select --");
  const [uniidentifno, setuniidentifno] = useState("");
  const [specializeloan, setspecializeloan] = useState("NO");
  const [credittype, setcredittype] = useState("40030");
  const [specloanmoratorium, setspecloanmoratorium] = useState("0");
  const [creditpurpose1, setcreditpurpose1] = useState("-- Select --");
  const [creditpurposesub1, setcreditpurposesub1] = useState("-- Select --");
  const [syndication, setsyndication] = useState("NO");
  const [creditlimit, setcreditlimit] = useState("0.00");
  const [syndicationstatus, setsyndicationstatus] = useState("NIL");
  const [outstandingamount, setoutstandingamount] = useState("0.00");
  const [synrefnumber, setsynrefnumber] = useState("0");
  const [feescode, setfeescode] = useState("F0003 (MANAGEMENT FEE) ");
  const [feesamount, setfeesamount] = useState("0.00");
  const [feeslist, setfeeslist] = useState([]);
  const [collateralpresent, setcollateralpresent] = useState("YES");
  const [collateralsecure, setcollateralsecure] = useState("YES");
  const [tenor, settenor] = useState("0");
  const[securitytype,setsecuritytype] = useState("SEC005")
  const [startDate, setStartDate] = useState("0"); 
  const [expiryDate, setExpiryDate] = useState("0");
  const [addresssecurity, setaddresssecurity] = useState("");
  const [repayagreemode, setrepayagreemode] = useState("100");
  const [ownersecurity, setownersecurity] = useState("");
  const [interestrate, setinterestrate] = useState("0.00");
  const [idtypesecureowner, setidtypesecureowner] = useState("BVN");
  const [benefaccountno, setbenefaccountno] = useState("");
  const [idsecureowner, setidsecureowner] = useState("");
  const [location, setlocation] = useState("015");
  const [guarantee, setguarantee] = useState("NO");
  const [relationshiptype, setrelationshiptype] = useState("RT001");
  const [guaranteetype, setguaranteetype] = useState("INDIVIDUAL");
  const [companysize, setcompanysize] = useState("CS001");
  const [directorid, setdirectorid] = useState("BVN");
  const [directorcode, setdirectorcode] = useState("");
  const [directoremail, setdirectoremail] = useState("");
  const [directorslist, setdirectorslist] = useState([]);
  const [guaranteeidtype, setguaranteeidtype] = useState("BVN");
  const [fundsourcecategory, setfundsourcecategory] = useState("FS1000");
  const [guarantorid, setguarantorid] = useState("");
  const [fundsource, setfundsource] = useState("");
  const [guarantoracctno, setguarantoracctno] = useState("");
  const [fundpercent, setfundpercent] = useState("100");
  const [guarantorbankcode, setguarantorbankcode] = useState("");
  const [eccinumber, seteccinumber] = useState("0");
  const [amountguaranteed, setamountguaranteed] = useState("0.00");
  const [legalstatus, setlegalstatus] = useState("40001");
  const [allData, setAllData] = useState(0);
  const [approved, setApproved] = useState(false);
  const navigate = useNavigate()
     function initializeAll(){
      console.log("Initialize All")
      console.log(sno)
      setsno(Number(sno)+1)
      setcreditpurposebussline1("-- Select --")
      setuniqidentify1("BVN");
      setcreditpurposebusssub1("-- Select --");
      setuniidentifno("");
      setspecializeloan("NO");
      setcredittype("40030");
      setspecloanmoratorium("0");
      setcreditpurpose1("-- Select --");
      setcreditpurposesub1("-- Select --");
      setsyndication("NO");
      setcreditlimit("0.00");
      setsyndicationstatus("NIL");
      setoutstandingamount("0.00");
      setsynrefnumber("0");
      setfeeslist([{"id":Math.random()},{"feescode" :"F0003 (MANAGEMENT FEE) "},{"feesamount":"000"}]);
      setdirectorslist([{"id":Math.random()},{"directorid":"0"},{"directorcode":"0"},{"directoremail":"0"}]);
      setcollateralpresent("YES");
      setcollateralsecure("SEC005");
      settenor("0");
      setsecuritytype("BVN");
      setStartDate("0"); 
      setExpiryDate("0");
      setaddresssecurity("");
      setrepayagreemode("100");
      setownersecurity("");
      setinterestrate("0.00");
      setidtypesecureowner("BVN");
      setbenefaccountno("");
      setidsecureowner("");
      setlocation("015");
      setguarantee("");
      setrelationshiptype("");
      setguaranteetype("");
      setcompanysize("");
      setguaranteeidtype("");
      setfundsourcecategory("");
      setguarantorid("");
      setfundsource("");
      setguarantoracctno("");
      setfundpercent("100");
      setguarantorbankcode("");
      seteccinumber("0");
      setamountguaranteed("");
      setlegalstatus("");
     }


     
  
     function handleDeleteFees(id) {
      const newfees1 = feeslist.filter((l)=>l.id !==id)
      setfeeslist(newfees1)
   }
   function handleDeleteDirectors(id) {
    const newdirectors1 = directorslist.filter((l)=>l.id !==id)
    setdirectorslist(newdirectors1)
 }
 useEffect(() => {
  fetchAllData()
  .then(response=>{
    console.log("All data fetched")
  })
}, [sno])

const fetchAllData = async () => {
  let response = await (
    await fetch("http://localhost:5000/crms300data")
  ).json();
  setAllData(response);
};

  const handleUpdate = (event) => {
    event.preventDefault();
    setApproved(true)
    console.log("Check Approved")
    console.log(approved)
    const crms300data = {sno, uniqidentify1,uniidentifno,credittype,creditpurpose1,creditpurposesub1,creditlimit,outstandingamount,
      feeslist,startDate,tenor,expiryDate,repayagreemode,interestrate,benefaccountno,location,relationshiptype,
      companysize,fundsourcecategory,fundsource,fundpercent,eccinumber,legalstatus,creditpurposebussline1,
      creditpurposebusssub1,specializeloan,specloanmoratorium,directorslist,syndication,syndicationstatus,
      synrefnumber,collateralpresent,collateralsecure,securitytype,addresssecurity,ownersecurity,
      idtypesecureowner,idsecureowner,guarantee,guaranteetype,guaranteeidtype,guarantorid,guarantoracctno,
      guarantorbankcode,amountguaranteed,approved
    }
    
    fetch(`http://localhost:5000/crms300data/${searchid}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms300data)
    }).then((res)=>{
      alert("Update Successfully")
    }).catch((err)=>{
      console.log(err)
    })
    //alert(JSON.stringify())
  }

  const handleSearch = ()=>{
    let fetchrs = fetch(`http://localhost:5000/crms300data/${searchid}`)
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
        setcredittype(d.credittype);
        setspecloanmoratorium(d.specloanmoratorium);
        setcreditpurpose1(d.creditpurpose1);
        //setdirectoruniqidentify1(d.directoruniqidentify1);
        setcreditpurposesub1(d.creditpurposesub1);
        setsyndication(d.syndication);
        setcreditlimit(d.creditlimit);
        setsyndicationstatus(d.syndicationstatus);
        setoutstandingamount(d.outstandingamount);
        setsynrefnumber(d.synrefnumber);
        setfeeslist(d.feeslist);
        setdirectorslist(d.directorslist);
        setcollateralpresent(d.collateralsecure);
        setcollateralsecure(d.collateralsecure);
        settenor(d.tenor);
        setsecuritytype(d.securitytype);
        setStartDate(d.startDate); 
        setExpiryDate(d.expiryDate);
        setaddresssecurity(d.addresssecurity);
        setrepayagreemode(d.repayagreemode);
        setownersecurity(d.ownersecurity);
        setinterestrate(d.interestrate);
        setidtypesecureowner(d.idtypesecureowner);
        setbenefaccountno(d.benefaccountno);
        setidsecureowner(d.idsecureowner);
        setlocation(d.location);
        setguarantee(d.guarantee);
        setrelationshiptype(d.relationshiptype);
        setguaranteetype(d.guaranteetype);
        setcompanysize(d.companysize);
        setguaranteeidtype(d.guaranteeidtype);
        setfundsourcecategory(d.fundsourcecategory);
        setguarantorid(d.guarantorid);
        setfundsource(d.fundsource);
        setguarantoracctno(d.guarantoracctno);
        setfundpercent(d.fundpercent);
        setguarantorbankcode(d.guarantorbankcode);
        seteccinumber(d.eccinumber);
        setamountguaranteed(d.amountguaranteed);
        setlegalstatus(d.legalstatus);

      }
    ).catch(console.err)
    }


    const handleGenerate = ()=>{
      let fetchrs = fetch('/api/courses')
      fetchrs.then(res=>{
        if (res.status >= 400) {
          alert("Page Does Not Exist !!!")
          console.log(res.status)
          //throw new Error("Server responds with error!")
      }
      return res.json()
    })
      .then()
      .catch(console.err)
      }

  if (flagShow)
  {
  return (
    <React.Fragment>
      <h2>CRMS 300 - Rendition of Borrower Credit Details (Individual and Non-Individual) --- Approval</h2>
      <div className="myDiv">
              <p color='#0000FF'>Search Record :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<input type="text" name="searchid" value={searchid} onChange={e =>setsearchid(e.target.value)}></input><button className='viewbtn' onClick={handleSearch}>Search</button><label name="errlable" value={errlabel} onChange={e =>seterrlabel(e.target.value)}></label></p>
      </div>
<div className="row">
  <div className="column">
      <form  className={styyl.body} action='/TestComp' method='get'>
        
      <label htmlFor="sno">SNO :</label>
        <br></br>
      <input type="text" placeholder="Enter a serial number" name="sno" value={sno} onChange={e =>setsno(e.target.value)} readOnly></input>
      <br></br>
      <label htmlFor="Unique Identifier type">Unique Identifier Type :</label>
      <br></br>
        <select className='formatselect' name="uniqidentify1" disabled value={uniqidentify1} onChange={e =>setuniqidentify1(e.target.value)}>
          <option value="BVN">BVN</option>
          <option value="TIN">TIN</option>
          <option value="GOVT">GOVT</option>
        </select>
        <br></br>
        <label htmlFor="Unique Identifier No">Unique Identifier No :</label>
      <br></br>
      <input type='text' readOnly placeholder='enter correct bvn or tin' name="uniidentifno" value={uniidentifno} onChange={e =>setuniidentifno(e.target.value)}></input>
      <br></br>
      <label htmlFor="Credit Type">Credit Type :</label>
      <br></br>
        <select className='formatselect' disabled name="credittype" value={credittype} onChange={e =>setcredittype(e.target.value)}>
        {credittypecode.map(credittypelist => (
           <option key={credittypelist.id}
           value={credittypelist.code}>{credittypelist.description}</option>
        ))
        }   
        </select>
        <br></br>
        <label htmlFor="Credit Purpose by Business Lines (Loan)">Credit Purpose by Business Lines (Loan) :</label>
      <br></br>
        <select className='formatselect' disabled name="creditpurpose1" value={creditpurpose1} onChange={e =>setcreditpurpose1(e.target.value)}>
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
        <select className='formatselect' disabled name="creditpurposesub1" value={creditpurposesub1} onChange={e =>setcreditpurposesub1(e.target.value)}>
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
      readOnly
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
      readOnly={true}
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
              <select className='formatselect' disabled name="feescodes" value={feescode} onChange={e =>setfeescode(e.target.value)}>
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
          readOnly
          name="feesamount" 
          value={feesamount}
          onChange={e =>setfeesamount((e.target.value))}
      >
      </NumericFormat>
      
      <ul>
      {console.log("listing !!!"+feeslist)}
               {feeslist.map(feeamtlist => (
                  <li key={feeamtlist.id}>
                    {feeamtlist.feescode} - {feeamtlist.feesamount} 
                    <span style={{marginLeft:"10px", color:"red", fontWeight:"bold", cursor:"pointer"}} 
                    onClick={(event)=>handleDeleteFees(feeamtlist.id)}>
                       </span></li>
               )
              )
              }
      </ul>
      </div>
      <br></br>
      <label htmlFor="Effective Date">Effective Date :</label>
      <br></br>
        <input type="date" readOnly name="startDate" placeholder="dd-mm-yyyy" value={startDate} onChange={e => setStartDate(e.target.value)} min="1997-01-01" max="2030-12-31"></input>
        <br></br>
      <label htmlFor="Tenor">Tenor :</label>
      <br></br>
      <input type='text' readOnly required placeholder='enter tenor' name="tenor" value={tenor} onChange={e =>settenor(e.target.value)}></input>
      <br></br>
      <label htmlFor="Expiry date">Expiry date :</label>
      <br></br>
       <input type="date" readOnly name="expiryDate" placeholder="dd-mm-yyyy" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} min="1997-01-01" max="2030-12-31"></input>
       <br></br>
       <label htmlFor="Repayment Agreement Mode">Repayment Agreement Mode :</label>
      <br></br>
        <select className='formatselect' disabled name="repayagreemode" value={repayagreemode} onChange={e =>setrepayagreemode(e.target.value)}>
        {repaymentstatuscode.map(repaymentstatuslist => (
           <option key={repaymentstatuslist.id}
           value={repaymentstatuslist.code}>{repaymentstatuslist.description}</option>
        ))
        }   
        </select>
        <br></br>
      <label htmlFor="Interest Rate">Interest Rate :</label>
      <br></br>
      <input type='text' readOnly placeholder='enter interest rate' required name="interestrate" value={interestrate} onChange={e =>setinterestrate(e.target.value)}></input>
      <br></br>
      <label htmlFor="Beneficiary Account Number">Beneficiary Account No :</label>
      <br></br>
      <input type='text' readOnly placeholder='enter beneficiary account number' required name="benefaccountno" value={benefaccountno} onChange={e =>setbenefaccountno(e.target.value)}></input>
      <br></br>
      <label htmlFor="Location of Beneficiary">Location of Beneficiary :</label>
      <br></br>
        <select className='formatselect' disabled required name="location" value={location} onChange={e =>setlocation(e.target.value)}>
        {locationcode.map(locationlist => (
           <option key={locationlist.id}
           value={locationlist.citycode}>{locationlist.statename} - {locationlist.cityname}</option>
        ))
        }   
        </select>
        <br></br>
      <label htmlFor="Relationship Type">Relationship Type :</label>
      <br></br>
        <select className='formatselect' disabled name="relationshiptype" value={relationshiptype} onChange={e =>setrelationshiptype(e.target.value)}>
        {relationshiptypecode.map(relationshiptypelist => (
           <option key={relationshiptypelist.id}
           value={relationshiptypelist.code}>{relationshiptypelist.description}</option>
        ))
        }   
        </select>
        <br></br>
      <label htmlFor="Company Size">Company Size :</label>
      <br></br>
        <select className='formatselect' disabled name="companysize" value={companysize} onChange={e =>setcompanysize(e.target.value)}>
        {companysizecodes.map(companysizelist => (
           <option key={companysizelist.id}
           value={companysizelist.code}>{companysizelist.size} | {companysizelist.employees} | {companysizelist.totalassets} | {companysizelist.annualturnover}</option>
        ))
        }   
        </select>
        <br></br>
        <label htmlFor="Funding Source Category">Funding Source Category :</label>
      <br></br>
        <select className='formatselect' disabled name="fundsourcecategory" value={fundsourcecategory} onChange={e =>setfundsourcecategory(e.target.value)}>
          <option value="LCY">LCY</option>
          <option value="FCY">FCY</option>
        </select>
        <br></br>
      <label htmlFor="Funding Source">Funding Source :</label>
      <br></br>
        <select className='formatselect' disabled name="fundsource" value={fundsource} onChange={e =>setfundsource(e.target.value)}>
        {fundingsourcecode.map(fundingsourcelist => (
           <option key={fundingsourcelist.id}
           value={fundingsourcelist.code}>{fundingsourcelist.description}</option>
        ))
        }   
        </select>
        <br></br>
      <label htmlFor="Funding Percent">Funding Percent :</label>
      <br></br>
      <input type='text' readOnly name="fundpercent" value={fundpercent} onChange={e =>setfundpercent(e.target.value)}></input>
      <br></br>
      <label htmlFor="ECCI Number">ECCI Number :</label>
      <br></br>
      <input type='text' readOnly placeholder='enter ecci number' required name="eccinumber" value={eccinumber} onChange={e =>seteccinumber(e.target.value)}></input>
      <br></br>
      <label htmlFor="Legal Status">Legal Status :</label>
      <br></br>
      <select className='formatselect' disabled name="legalstatus" value={legalstatus} onChange={e =>setlegalstatus(e.target.value)}>
        {legalstatuscode.map(legalstatuslist => (
           <option key={legalstatuslist.id}
           value={legalstatuslist.code}>{legalstatuslist.description}</option>
        ))
        }   
        </select>
      <br></br>
      <label htmlFor="Classification By Bussiness lines">Classification By Bussiness lines :</label>
      <br></br>
      <select className='formatselect' disabled name="creditpurposebussline1" value={creditpurposebussline1} onChange={e =>setcreditpurposebussline1(e.target.value)}>
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
      <select className='formatselect' disabled name="creditpurposebusssub1" selected value={creditpurposebusssub1} onChange={e =>setcreditpurposebusssub1(e.target.value)}>
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
      <select className='formatselect' disabled name="specializeloan" value={specializeloan} onChange={e =>setspecializeloan(e.target.value)}>
          <option value="NO">NO</option>
          <option value="YES">YES</option>
        </select>
      <br></br>
      <label htmlFor="Specialized Loan Moratorium Period">Specialized Loan Moratorium Period  :</label>
      <br></br>
      <input type='text' readOnly name="specloanmoratorium" value={specloanmoratorium} onChange={e =>setspecloanmoratorium(e.target.value)}></input>
      <br></br>
      <div className='myDiv1'>
        <h5><u>Directors Information</u></h5>
              &emsp;ID Type :
              <select name="directorid" disabled value={directorid} onChange={e =>setdirectorid(e.target.value)}>
                <option key="BVN">BVN</option>
                <option key="TIN">TIN</option>
                <option key="GOVT">GOVT</option>
              </select>
              &emsp;ID Details :
              <input type="text" readOnly value={directorcode} onChange={(e)=>setdirectorcode(e.target.value)}></input>
              <br></br>
              &emsp;&emsp;Email :
              <input type="text" readOnly value={directoremail} onChange={(e)=>setdirectoremail(e.target.value)}></input>
                 {console.log("listing 2 !!!"+directorslist)}
               <ul>
               {directorslist.map(directlist => (
                  <li key={directlist.id}>{directlist.directorid} - {directlist.directorcode} {directlist.directoremail}<span style={{marginLeft:"10px", color:"red", fontWeight:"bold", cursor:"pointer"}} onClick={(event)=>handleDeleteDirectors(directlist.id)}></span></li>
               )
              )
              }
              </ul>
      </div>
      <br></br>
      <label htmlFor="syndication">Syndication :</label>
      <br></br>
      <select className='formatselect' disabled name="syndication" value={syndication} onChange={e =>setsyndication(e.target.value)}>
          <option value="NO">NO</option>
          <option value="YES">YES</option>
        </select>
      <br></br>
      <label htmlFor="Syndication Status">Syndication Status :</label>
      <br></br>
      <select className='formatselect' disabled name="syndicationstatus" value={syndicationstatus} onChange={e =>setsyndicationstatus(e.target.value)}>
          <option value="LEAD">LEAD</option>
          <option value="MEMBER">MEMBER</option>
          <option value="NIL">NIL</option>
        </select>
      <br></br>
      <label htmlFor="Syndication Reference Number">Syndication Ref. No :</label>
      <br></br>
      <input type='text' readOnly placeholder='enter ref number' name="synrefnumber" value={synrefnumber} onChange={e =>setsynrefnumber(e.target.value)}></input>
      <br></br>
      <label htmlFor="Collateral Present">Collateral Present :</label>
      <br></br>
      <select className='formatselect' disabled name="collateralpresent" value={collateralpresent} onChange={e =>setcollateralpresent(e.target.value)}>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
      <br></br>
      <label htmlFor="Collateral Secure">Collateral Secure :</label>
      <br></br>
      <select className='formatselect' disabled name="collateralsecure" value={collateralsecure} onChange={e =>setcollateralsecure(e.target.value)}>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
      <br></br>
      <label htmlFor="Security Type">Security Type :</label>
      <br></br>
      <select className='formatselect' disabled name="securitytype" value={securitytype} onChange={e =>setsecuritytype(e.target.value)}>
        {securetypecode.map(securetypelist => (
           <option key={securetypelist.id}
           value={securetypelist.code}>{securetypelist.description}</option>
        ))
        } 
        </select>
      <br></br>
      <label htmlFor="Address of Security">Address of Security :</label>
      <br></br>
      <input type='text' readOnly placeholder='enter address' required name="addresssecurity" value={addresssecurity} onChange={e =>setaddresssecurity(e.target.value)}></input>
      <br></br>
      <label htmlFor="Owner of Security">Owner of Security :</label>
      <br></br>
      <input type='text' readOnly placeholder='enter owner of security' required name="ownersecurity" value={ownersecurity} onChange={e =>setownersecurity(e.target.value)}></input>
      <br></br>
      <label htmlFor="ID Type of Security Owner">ID Type of Security Owner :</label>
      <br></br>
      <select className='formatselect' disabled name="idtypesecureowner" value={idtypesecureowner} onChange={e =>setidtypesecureowner(e.target.value)}>
          <option value="BVN">BVN</option>
          <option value="TIN">TIN</option>
          <option value="GOVT">GOVT</option>
        </select>
        <br></br>
      <label htmlFor="ID of Security Owner">ID of Security Owner :</label>
      <br></br>
      <input type='text' readOnly placeholder='bvn, tin, others' name="idsecureowner" value={idsecureowner} onChange={e =>setidsecureowner(e.target.value)}></input>
      <br></br>
      <label htmlFor="Guarantee">Guarantee :</label>
      <br></br>
      <select className='formatselect' disabled name="guarantee" value={guarantee} onChange={e =>setguarantee(e.target.value)}>
          <option value="NO">NO</option>
          <option value="YES">YES</option>
        </select>
      <br></br>
      <label htmlFor="Guarantee Type">Guarantee Type :</label>
      <br></br>
      <select className='formatselect' disabled name="guaranteetype" value={guaranteetype} onChange={e =>setguaranteetype(e.target.value)}>
          <option value="INDIVIDUAL">INDIVIDUAL</option>
          <option value="NON-INDIVIDUAL">NON-INDIVIDUAL</option>
        </select>
      <br></br>
      <label htmlFor="Guarantee ID Type">Guarantee ID Type :</label>
      <br></br>
      <select className='formatselect' disabled name="guaranteeidtype" value={guaranteeidtype} onChange={e =>setguaranteeidtype(e.target.value)}>
          <option value="BVN">BVN</option>
          <option value="TIN">TIN</option>
          <option value="GOVT">GOVT</option>
        </select>
        <br></br>
      <label htmlFor="Guarantor ID">Guarantor ID :</label>
      <br></br>
      <input type='text' readOnly name="guarantorid" value={guarantorid} onChange={e =>setguarantorid(e.target.value)}></input>
      <br></br>
      <label htmlFor="Guarantor Account Number">Guarantor Account Number :</label>
      <br></br>
      <input type='text' readOnly name="guarantoracctno" value={guarantoracctno} onChange={e =>setguarantoracctno(e.target.value)}></input>
      <br></br>
      <label htmlFor="Guarantor Bank Code">Guarantor Bank Code :</label>
      <br></br>
      <select className='formatselect' disabled name="guarantorbankcode" value={guarantorbankcode} onChange={e =>setguarantorbankcode(e.target.value)}>
        {bankscode.map(bankslist => (
           <option key={bankslist.id}
           value={bankslist.code}>{bankslist.description}</option>
        ))
        } 
        </select>
      <br></br>
      <label htmlFor="Amount Guaranteed">Amount Guaranteed :</label>
      <br></br>
      <NumericFormat
      displayType='input'
      readOnly
      thousandSeparator={true}
      decimalSeparator="."
      placeholder='enter amount guaranteed'
      name="amountguaranteed" 
      value={amountguaranteed}
      onChange={e =>setamountguaranteed((e.target.value))}
      >
      </NumericFormat>
      
      <br></br>
      <button className='registerbtn' type="button" onClick={handleUpdate}>Approve Data</button>&nbsp;
      {/*<span style={{marginLeft:"10px", backgroundColor:"blue", foregroundColor:"white", fontWeight:"bold", cursor:"pointer", border:"strong"}}><a href='/CRMS300xmlGenerated' target='_blank'>Generate</a></span>
      <button className='smalladdbtn' type="button" onClick={()=>navigate("/CRMS300.xml")}>Generate XML Data</button>
      */}
      <a className='smalladdbtn2' href={`/CRMS300xmlGenerated?username=${username}&useremail=${useremail}&userstatus=${userstatus}`} target='_blank'>Generate xml File
      </a>
      </form>
      </div>
  <div className="column">
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

export default Crms300Approve