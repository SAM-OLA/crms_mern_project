import React from 'react'
import {NumericFormat} from 'react-number-format'
import styyl from './styles.modules.css';
import { useState, useEffect} from 'react';
//import { useCookies } from 'react-cookie';


function Crms500(props) {
  let flagShow = props.flag11
  console.log("Flag "+flagShow)
  //const [cookies, setCookie, removeCookie] = useCookies(['userauth']);
  //console.log(`Cookies are ${cookies.userauth[0].username}`)
  const [searchid, setsearchid] = useState("0"); 
  const [errlabel, seterrlabel] = useState("0");
  const [sno, setsno] = useState(1);
  const [uniqidentify1, setuniqidentify1] = useState("BVN");
  const [uniidentifno, setuniidentifno] = useState("0");
  const [customerid, setcustomerid] = useState("");
  const [accountname, setaccountname] = useState("");
  const [issuernumber, setissuernumber] = useState("0");
  const [reasonforreturn, setreasonforreturn] = useState("100");
  const [micrnumber, setmicrnumber] = useState("0");
  const [accountnumber, setaccountnumber] = useState("RT001");
  const [transactionamount, settransactionamount] = useState("CS001");
  const [currency, setcurrency] = useState("BVN");
  const [transactiondate, settransactiondate] = useState("");
  const [issuedate, setissuedate] = useState("");
  const [branchcode , setbranchcode] = useState();
  const [dateaccountopened, setdateaccountopened] = useState(0);
  const [transactionid, settransactionid] = useState(0);
  const [sortcode, setsortcode] = useState(0);
  const [chequenumber, setchequenumber] = useState(0);
  const [settled, setsettled] = useState(0);
  const [settlementdate, setsettlementdate] = useState(0);
  const [payee, setpayee] = useState(0);
  const [approved, setApproved] = useState(false);
  const [allData, setAllData] = useState(0);
  //const [userid, setUserid] = useState(cookies.userauth[0].username);
  const [userid, setUserid] = useState("dapo");
  //cookies.get('userauth') || null
  
  
  function initializeAll(){
      console.log("Initialize All")
      console.log(sno)
      setsno(Number(sno)+1)
      setuniqidentify1("BVN");
      setuniidentifno("");
      setcustomerid("");
      setaccountname("");
      setissuernumber("");
      setreasonforreturn("");
      setmicrnumber("");
      setaccountname("");
      settransactionamount("NO");
      setcurrency("");
      settransactiondate("");
      setissuedate("");
      setbranchcode("");
      setdateaccountopened("");
      settransactionid("");
      setsortcode("");
      setchequenumber("");
      setsettled("");
      setsettlementdate("");
      setpayee("");
      //setUserid();
     }
   
   

 useEffect(() => {
  fetchAllData()
  .then(response=>{
    console.log("All data fetched")
  })
}, [sno])

const fetchAllData = async () => {
  let response = await (
    await fetch(`http://localhost:5000/crms500data?userid=${userid}`)
  ).json();
  setAllData(response);
};


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Status ====")
   
    const crms500data = {sno, uniqidentify1,uniidentifno,customerid,accountname,issuernumber,
      reasonforreturn,micrnumber,accountnumber,transactionamount,currency, transactiondate, issuedate,
      branchcode,dateaccountopened,transactionid, sortcode,chequenumber,settled,settlementdate,payee,approved,userid
    }
    console.log(crms500data)
    fetch("http:localhost:5000/crms500data",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms500data)
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
    const crms500data = {sno, uniqidentify1,uniidentifno,customerid,accountname,issuernumber,
        reasonforreturn,micrnumber,accountnumber,transactionamount,currency, transactiondate, issuedate,
        branchcode,dateaccountopened,transactionid, sortcode,chequenumber,settled,settlementdate,payee,approved,userid
    }
    
    fetch(`http://localhost:5000/crms500data?userid=${userid}&id=${searchid}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms500data)
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
        
    fetch(`http://localhost:5000/crms500data/${searchid}`,{
      method:"DELETE"
    }).then((res)=>{
      alert("Delete Successfully")
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
  }

  const handleSearch = ()=>{
    let fetchrs = fetch(`http://localhost:5000/crms500data/${searchid}`)
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
        setcustomerid(d.customerid);
        setissuernumber(d.issuernumber);
        setreasonforreturn(d.reasonforreturn);
        setmicrnumber(d.micrnumber);
        setaccountname(d.accountname);
        settransactionamount(d.transactionamount);
        setcurrency(d.currency);
        settransactiondate(d.transactiondate);
        setissuedate(d.issuedate);
        setbranchcode(d.branchcode);
        setdateaccountopened(d.dateaccountopened);
        settransactionid(d.transactionid);
        setsortcode(d.sortcode);
        setchequenumber(d.chequenumber);
        setsettled(d.settled);
        setsettlementdate(d.settlementdate);
        setpayee(d.payee);
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
      <h2>CRMS 500 -  Rendition Dishonoured Cheques</h2>
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
      <label htmlFor="Customer ID">Customer ID :</label>
      <br></br>
      <input type='text' required placeholder='enter customer id' name="customerid" value={customerid} onChange={e =>setcustomerid(e.target.value)}></input>
      <br></br>
      <label htmlFor="Account Name">Account Name :</label>
      <br></br>
      <input type='text' required placeholder='enter accountname' name="accountname" value={accountname} onChange={e =>setaccountname(e.target.value)}></input>
      <br></br>
      <label htmlFor="Issuer Number">Issuer Number :</label>
      <br></br>
      <input type='text' required placeholder='enter issuer number' name="issuernumber" value={issuernumber} onChange={e =>setissuernumber(e.target.value)}></input>
      <br></br>
      <label htmlFor="Reason For Return">Reason For Return :</label>
      <br></br>
      <input type='text' required placeholder='enter reason for return' name="reasonforreturn" value={reasonforreturn} onChange={e =>setissuernumber(e.target.value)}></input>
      <br></br>
      <label htmlFor="MICR Number">MICR Number :</label>
      <br></br>
      <input type='text' required placeholder='enter micr number' name="micrnumber" value={micrnumber} onChange={e =>setmicrnumber(e.target.value)}></input>
      <br></br>
      <label htmlFor="Account Number">Account Number :</label>
      <br></br>
      <input type='text' required placeholder='enter account number' name="accountnumber" value={accountnumber} onChange={e =>setaccountnumber(e.target.value)}></input>
      <br></br>
      <label htmlFor="Transaction Amount">Transaction Amount :</label>
      <br></br>
      <NumericFormat
      readOnly={false}
      disabled={false}
      displayType='input'
      thousandSeparator={true}
      decimalSeparator="."
      placeholder='enter transaction amount'
      name="transactionamount" 
      value={transactionamount}
      onChange={e =>settransactionamount((e.target.value))}
      >
      </NumericFormat>
      <br></br>
      <label htmlFor="Currency">Currency :</label>
      <br></br>
        <select className='formatselect' name="currency" value={currency} onChange={e =>setcurrency(e.target.value)}>
        <option value="NGN">NGN</option>
        <option value="USD">USD</option>   
        <option value="GBP">GBP</option>   
        <option value="EUR">EUR</option>   
        </select>
        <br></br>
        <label htmlFor="Transaction Date">Transaction Date :</label>
      <br></br>
        <input type="date" name="transactiondate" placeholder="dd-mm-yyyy" value={transactiondate} onChange={e => settransactiondate(e.target.value)} min="1997-01-01" max="2030-12-31"></input>
        <br></br>
        <label htmlFor="Issue Date">Issue Date :</label>
      <br></br>
        <input type="date" name="issuedate" placeholder="dd-mm-yyyy" value={issuedate} onChange={e => setissuedate(e.target.value)} min="1997-01-01" max="2030-12-31"></input>
        <br></br>
        <label htmlFor="Branch Code">Branch Code :</label>
      <br></br>
      <input type='text' required placeholder='enter branch code' name="branchcode" value={branchcode} onChange={e =>setbranchcode(e.target.value)}></input>
      <br></br>
        <label htmlFor="Date Account Opened">Date Account Opened :</label>
      <br></br>
        <input type="date" name="dateaccountopened" placeholder="dd-mm-yyyy" value={dateaccountopened} onChange={e => setdateaccountopened(e.target.value)} min="1997-01-01" max="2030-12-31"></input>
        <br></br>
        <label htmlFor="Transaction ID">Transaction ID :</label>
      <br></br>
      <input type='text' required placeholder='enter transactionid' name="transactionid" value={transactionid} onChange={e =>settransactionid(e.target.value)}></input>
      <br></br>
      <label htmlFor="Sort Code">Sort Code :</label>
      <br></br>
      <input type='text' required placeholder='enter sort code' name="sortcode" value={sortcode} onChange={e =>setsortcode(e.target.value)}></input>
      <br></br>
      <label htmlFor="Cheque Number">Cheque Number :</label>
      <br></br>
      <input type='text' required placeholder='enter cheque number' name="chequenumber" value={chequenumber} onChange={e =>setchequenumber(e.target.value)}></input>
      <br></br>
      <label htmlFor="Settled">Settled :</label>
      <br></br>
      <select className='formatselect' name="settled" value={settled} onChange={e =>setsettled(e.target.value)}>
          <option value="NO">NO</option>
          <option value="YES">YES</option>
        </select>
      <br></br>
      <label htmlFor="Settlement Date">Settlement Date :</label>
      <br></br>
        <input type="date" name="settlementdate" placeholder="dd-mm-yyyy" value={settlementdate} onChange={e => setsettlementdate(e.target.value)} min="1997-01-01" max="2030-12-31"></input>
      <br></br>
      <label htmlFor="Payee">Payee :</label>
      <br></br>
      <input type='text' required placeholder='enter payee' name="payee" value={payee} onChange={e =>setpayee(e.target.value)}></input>
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

export default Crms500