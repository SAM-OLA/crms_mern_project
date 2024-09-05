import React from 'react'
import {NumericFormat} from 'react-number-format'
import styyl from './styles.modules.css';
import credittypecode from './data/credittypecode.json'
import credittypebussline from './data/credittypebussline.json'
import credittypebusslinesub from './data/credittypebusslinesub.json'
import repaymentstatuscode from './data/repaymentstatuscode.json'
import legalstatuscode from './data/legalstatuscode.json'
import securetypecode from './data/securetypecode.json'
import feescodes from './data/feescode.json'
import { useState, useEffect} from 'react';
//import { useCookies } from 'react-cookie';


function Crms200(props) {
  let flagShow = props.flag4
  console.log("Flag "+flagShow)
  //const [cookies, setCookie, removeCookie] = useCookies(['userauth']);
  //console.log(`Cookies are ${cookies.userauth[0].username}`)
  const [searchid, setsearchid] = useState("0"); 
  const [errlabel, seterrlabel] = useState("0");
  const [sno, setsno] = useState(1);
  const [uniqidentify1, setuniqidentify1] = useState("BVN");
  const [uniidentifno, setuniidentifno] = useState("0");
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
  const [repayagreemode, setrepayagreemode] = useState("100");
  const [interestrate, setinterestrate] = useState("0.00");
  const [legalstatus, setlegalstatus] = useState("40001");
  const [repaymentsource, setrepaymentsource] = useState("");
  const [allData, setAllData] = useState(0);
  const [approved, setApproved] = useState(false);
  const [userid, setUserid] =useState(0);
  //const [userid, setUserid] = useState(cookies.userauth[0].username);
  //cookies.get('userauth') || null
  
  
  function initializeAll(){
      console.log("Initialize All")
      console.log(sno)
      setsno(Number(sno)+1)
      setuniqidentify1("BVN");
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
      setcollateralpresent("YES");
      setcollateralsecure("SEC005");
      settenor("0");
      setsecuritytype("BVN");
      setStartDate("0"); 
      setExpiryDate("0");
      setrepayagreemode("100");
      setinterestrate("0.00");
      setlegalstatus("");
      //setUserid();
     }
   
     function handleDeleteFees(id) {
      //alert(id)
      const newfees1 = feeslist.filter((l)=>l.id !==id)
      setfeeslist(newfees1)
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
   
   

 useEffect(() => {
  fetchAllData()
  .then(response=>{
    console.log("All data fetched")
  })
}, [sno])

const fetchAllData = async () => {
  let response = await (
    await fetch(`http://localhost:5000/crms200data?userid=${userid}`)
  ).json();
  setAllData(response);
};


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Status ====")
    console.log(typeof(feeslist))
    if((feeslist.length) === 0)
    {
      setfeeslist([{"id":Math.random},{"feescode" :"F0003 (MANAGEMENT FEE) "},{"feesamount":"000"}]);  
    }
    const crms200data = {sno, uniqidentify1,uniidentifno,legalstatus,credittype,creditpurpose1,creditpurposesub1,creditlimit,outstandingamount,
      feeslist,startDate,tenor,expiryDate,repayagreemode,specializeloan,specloanmoratorium,interestrate,collateralpresent,collateralsecure,repaymentsource,securitytype,
      syndication,syndicationstatus,synrefnumber,approved,userid
    }
    console.log(crms200data)
    fetch("http:localhost:5000/crms200data",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms200data)
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
    const crms200data = {sno, uniqidentify1,uniidentifno,legalstatus,credittype,creditpurpose1,creditpurposesub1,creditlimit,outstandingamount,
      feeslist,startDate,tenor,expiryDate,repayagreemode,specializeloan,specloanmoratorium,interestrate,collateralpresent,collateralsecure,repaymentsource,securitytype,
      syndication,syndicationstatus,synrefnumber,approved,userid
    }
    
    fetch(`http://localhost:5000/crms200data?userid=${userid}&id=${searchid}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms200data)
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
        
    fetch(`http://localhost:5000/crms200data/${searchid}`,{
      method:"DELETE"
    }).then((res)=>{
      alert("Delete Successfully")
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
  }

  const handleSearch = ()=>{
    let fetchrs = fetch(`http://localhost:5000/crms200data/${searchid}`)
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
        setuniqidentify1(d.uniqidentify1);
        setuniidentifno(d.uniidentifno);
        setlegalstatus(d.legalstatus);
        setcredittype(d.credittype);
        setcreditlimit(d.creditlimit);
        setoutstandingamount(d.outstandingamount);
        setfeeslist(d.feeslist);
        setStartDate(d.startDate); 
        settenor(d.tenor);
        setExpiryDate(d.expiryDate);
        setrepayagreemode(d.repayagreemode);
        setspecializeloan(d.specializeloan);
        setspecloanmoratorium(d.specloanmoratorium);
        setinterestrate(d.interestrate);
        setcollateralpresent(d.collateralsecure);
        setcollateralsecure(d.collateralsecure);
        setsecuritytype(d.securitytype);
        setrepaymentsource(d.repaymentsource)
        setsyndication(d.syndication);
        setsyndicationstatus(d.syndicationstatus);
        setsynrefnumber(d.synrefnumber);
        setApproved(d.approved)
        //setUserid(cookies.userauth[0].username)

      }
    ).catch(console.err)
    }

  if (flagShow)
  {
  return (
    <React.Fragment>
      <h2>CRMS 200 - Submissions for MDAs of Federal Govt, State Govts, Local Govts and FCT</h2>
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
        <label htmlFor="Unique Identifier No">Government Code:</label>
      <br></br>
      <input type='text' required placeholder='enter correct bvn or tin' name="uniidentifno" value={uniidentifno} onChange={e =>setuniidentifno(e.target.value)}></input>
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
      <label htmlFor="Credit Type">Credit Type :</label>
      <br></br>
        <select className='formatselect' name="credittype" value={credittype} onChange={e =>setcredittype(e.target.value)}>
        {credittypecode.map(credittypelist => (
           <option key={credittypelist.id}
           value={credittypelist.code}>{credittypelist.description}</option>
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
      <label htmlFor="Interest Rate">Interest Rate :</label>
      <br></br>
      <input type='text' placeholder='enter interest rate' required name="interestrate" value={interestrate} onChange={e =>setinterestrate(e.target.value)}></input>
      <br></br>
      <label htmlFor="Collateral Present">Collateral Present :</label>
      <br></br>
      <select className='formatselect' name="collateralpresent" value={collateralpresent} onChange={e =>setcollateralpresent(e.target.value)}>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
      <br></br>
      <label htmlFor="Collateral Secure">Collateral Secure :</label>
      <br></br>
      <select className='formatselect' name="collateralsecure" value={collateralsecure} onChange={e =>setcollateralsecure(e.target.value)}>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
      <br></br>
      <label htmlFor="Security Type">Security Type :</label>
      <br></br>
      <select className='formatselect' name="securitytype" value={securitytype} onChange={e =>setsecuritytype(e.target.value)}>
        {securetypecode.map(securetypelist => (
           <option key={securetypelist.id}
           value={securetypelist.code}>{securetypelist.description}</option>
        ))
        } 
        </select>
      <br></br>
      <label htmlFor="syndication">Syndication :</label>
      <br></br>
      <select className='formatselect' name="syndication" value={syndication} onChange={e =>setsyndication(e.target.value)}>
          <option value="NO">NO</option>
          <option value="YES">YES</option>
        </select>
      <br></br>
      <label htmlFor="Syndication Status">Syndication Status :</label>
      <br></br>
      <select className='formatselect' name="syndicationstatus" value={syndicationstatus} onChange={e =>setsyndicationstatus(e.target.value)}>
          <option value="LEAD">LEAD</option>
          <option value="MEMBER">MEMBER</option>
          <option value="NIL">NIL</option>
        </select>
      <br></br>
      <label htmlFor="Syndication Reference Number">Syndication Ref. No :</label>
      <br></br>
      <input type='text' placeholder='enter ref number' name="synrefnumber" value={synrefnumber} onChange={e =>setsynrefnumber(e.target.value)}></input>
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

export default Crms200