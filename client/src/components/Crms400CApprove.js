import React from 'react'
import {NumericFormat} from 'react-number-format'
import styyl from './styles.modules.css';
import repaymentstatuscode from './data/repaymentstatuscode.json'
import { useState, useEffect} from 'react';
import axios from 'axios';

function Crms400ApproveC(props) {
  let flagShow = props.flag1
  console.log("Flag "+flagShow)
  const username = props.username
  const useremail = props.usermail
  const userstatus = props.userstatus
  const [searchid, setsearchid] = useState(""); 
  const [errlabel, seterrlabel] = useState("");
  const [sno, setsno] = useState(1);
  const [uniqidentify1, setuniqidentify1] = useState("BVN");
  const [uniidentifno, setuniidentifno] = useState("");
  const [crmsrefnumber, setcrmsrefnumber] = useState("0.00");
  const [outstandingamount, setoutstandingamount] = useState("0.00");
  const [repayagreemode, setrepayagreemode] = useState("100");
  const [tbibankcharges, settbibankcharges] = useState("");
  const [tbicreditwriteoff, settbicreditwriteoff] = useState("0.00");
  const [tbicreditdrawdown, settbicreditdrawdown] = useState("BVN");
  const [tcicredit, settcicredit] = useState("");
  const [tcicredittrntype, settcicredittrntype] = useState("Trf");
  const [tcidebitamount, settcidebitamount] = useState("");
  const [tcidebittrntype, settcidebittrntype] = useState("Trf");
  const [unamortisedcredchgs, setunamortisedcredchgs] = useState("");
  const [liquidation, setliquidation] = useState("BVN");
  const [allData, setAllData] = useState([]);
  const [approved, setApproved] = useState(false);
  const [file, setFile] = useState();
  
  
     function initializeAll(){
      console.log("Initialize All")
      console.log(sno)
      setsno(Number(sno)+1)
      setuniqidentify1("BVN");
      setuniidentifno("");
      setcrmsrefnumber("0");
      setoutstandingamount("0.00");
      setrepayagreemode("100");
      settbibankcharges("0.00");
      settbicreditwriteoff("0.00");
      settbicreditdrawdown("0.00");
      settcicredit("0.00");
      settcicredittrntype("Trf");
      settcidebitamount("0.00");
      settcidebittrntype("Trf");
      setunamortisedcredchgs("0.00")
      setliquidation("NO")
     }
   
  
 useEffect(() => {
  fetchAllData()
  .then(response=>{
    console.log("All data fetched")
  })
}, [sno])

const fetchAllData = async () => {
  let response = await (
    await fetch("http://localhost:5000/crms400Cdata")
  ).json();
  setAllData(response);
};


  const handleSubmit = (event) => {
    event.preventDefault();
    const crms400Cdata = {sno, uniqidentify1,uniidentifno,crmsrefnumber,outstandingamount,
      repayagreemode,tbibankcharges,tbicreditwriteoff,tbicreditdrawdown,tcicredit,tcicredittrntype,
      tcidebitamount,tcidebittrntype,unamortisedcredchgs,liquidation,approved
    }
    console.log(crms400Cdata)
    fetch("http://localhost:5000/crms400Cdata",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms400Cdata)
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
    const crms400Cdata = {sno, uniqidentify1,uniidentifno,crmsrefnumber,outstandingamount,
      repayagreemode,tbibankcharges,tbicreditwriteoff,tbicreditdrawdown,tcicredit,tcicredittrntype,
      tcidebitamount,tcidebittrntype,unamortisedcredchgs,liquidation,approved
    }
    
    fetch(`http://localhost:5000/crms400Cdata/${searchid}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms400Cdata)
    }).then((res)=>{
      alert("Update Successfully")
      //window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
    //alert(JSON.stringify())
    initializeAll()
  }

  const handleDelete = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/crms400Cdata/${searchid}`,{
      method:"DELETE"
    }).then((res)=>{
      alert("Delete Successfully")
      //window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
    //alert(JSON.stringify())
    initializeAll()
  }

  const handleSearch = ()=>{
    let fetchrs = fetch(`http://localhost:5000/crms400Cdata/${searchid}`)
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
      setcrmsrefnumber(d.crmsrefnumber);
      setoutstandingamount(d.outstandingamount);
      setrepayagreemode(d.repayagreemode);
      settbibankcharges(d.tbibankcharges);
      settbicreditwriteoff(d.tbicreditwriteoff);
      settbicreditdrawdown(d.tbicreditdrawdown);
      settcicredit(tcicredit);
      settcicredittrntype(d.tcicredittrntype);
      settcidebitamount(d.tcidebittrxn);
      settcidebittrntype(d.tcidebittrntype);
      setunamortisedcredchgs(d.unamortisedcredchgs)
      setliquidation(d.liquidation)

      }
    ).catch(console.err)
    }

    const handleFileUpload = ()=>{
       // On file upload (click the upload button)
      // Create an object of formData
      const formData = new FormData();
      const url = "http://localhost:4000/uploadfile";
      // Update the formData object
      formData.append("myFile",file);
      formData.append("filename",file.name);  
      // Details of the uploaded file
      console.log(file);

      // Request made to the backend api
      // Send formData object
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      };
      axios.post(url, formData, config).then((response) => {
        console.log("Good - "+response.data);
      })
      .catch((err)=>{
        console.error("Bad - "+err)
      })


    }

  if (flagShow)
  {
  return (
    <React.Fragment>
      <h2>CRMS 400C - Update of Outstanding Balance and Liquidation of Existing Facility</h2>
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
        <br></br>
        <label htmlFor="CRMS Ref Number">CRMS Ref. Number :</label>
      <br></br>
      <input type='text' required placeholder='enter crms ref. number' name="crmsrefnumber" value={crmsrefnumber} onChange={e =>setcrmsrefnumber(e.target.value)}></input>
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
      <label htmlFor="Performance Repayment Status">Performance Repayment Status :</label>
      <br></br>
        <select className='formatselect' name="repayagreemode" value={repayagreemode} onChange={e =>setrepayagreemode(e.target.value)}>
        {repaymentstatuscode.map(repaymentstatuslist => (
           <option key={repaymentstatuslist.id}
           value={repaymentstatuslist.code}>{repaymentstatuslist.description}</option>
        ))
        }   
        </select>
        <br></br>
      <label htmlFor="Total Bank Induced Debit Bank Charges">Total Bank Induced Debit Bank Charges :</label>
      <br></br>
      <NumericFormat
      readOnly={false}
      disabled={false}
      displayType='input'
      thousandSeparator={true}
      decimalSeparator="."
      name="tbibankcharges" 
      value={tbibankcharges}
      onChange={e =>settbibankcharges((e.target.value))}
      >
      </NumericFormat>
      <br></br>
      <label htmlFor="Total Bank Induced Credit WriteOff">Total Bank Induced Credit WriteOff :</label>
      <br></br>
      <NumericFormat
      readOnly={false}
      disabled={false}
      displayType='input'
      thousandSeparator={true}
      decimalSeparator="."
      name="tbicreditwriteoff" 
      value={tbicreditwriteoff}
      onChange={e =>settbicreditwriteoff((e.target.value))}
      >
      </NumericFormat>
      <br></br>
      <label htmlFor="Total Bank Induced Credit Drawdown">Total Bank Induced Credit Drawdown :</label>
      <br></br>
      <NumericFormat  
      readOnly={false}
      disabled={false}
      displayType='input'
      thousandSeparator={true}
      decimalSeparator="."
      name="tbicreditdrawdown" 
      value={tbicreditdrawdown}
      onChange={e =>settbicreditdrawdown((e.target.value))}
      >
      </NumericFormat>
      <br></br>
      <label htmlFor="Total Customer Induced Credit">Total Customer Induced Credit :</label>
      <br></br>
      <NumericFormat  
      readOnly={false}
      disabled={false}
      displayType='input'
      thousandSeparator={true}
      decimalSeparator="."
      name="tcicredit" 
      value={tcicredit}
      onChange={e =>settcicredit((e.target.value))}
      >
      </NumericFormat>
      <br></br>
      <label htmlFor="Total Customer Induced Credit Trans Type">Total Customer Induced Credit Trans Type:</label>
      <br></br>
      <NumericFormat  
      readOnly={false}
      disabled={false}
      displayType='input'
      thousandSeparator={true}
      decimalSeparator="."
      name="tcicredit" 
      value={tcicredittrntype}
      onChange={e =>settcicredittrntype((e.target.value))}
      >
      </NumericFormat>
      <br></br>
      <label htmlFor="Total Customer Induced Debit Amount">Total Customer Induced Debit Amount:</label>
      <br></br>
      <NumericFormat  
      readOnly={false}
      disabled={false}
      displayType='input'
      thousandSeparator={true}
      decimalSeparator="."
      name="tcidebitamount" 
      value={tcidebitamount}
      onChange={e =>settcidebitamount((e.target.value))}
      >
      </NumericFormat>
      <br></br>
      <label htmlFor="Total Customer Induced Debit Trans">Total Customer Induced Debit Transaction:</label>
      <br></br>
      <NumericFormat  
      readOnly={false}
      disabled={false}
      displayType='input'
      thousandSeparator={true}
      decimalSeparator="."
      name="tcidebittrntype" 
      value={tcidebittrntype}
      onChange={e =>settcidebittrntype((e.target.value))}
      >
      </NumericFormat>
      <br></br>
      <label htmlFor="Unamortized Credit Charges">Unamortized Credit Charges:</label>
      <br></br>
      <NumericFormat  
      readOnly={false}
      disabled={false}
      displayType='input'
      thousandSeparator={true}
      decimalSeparator="."
      name="unamortisedcredchgs" 
      value={unamortisedcredchgs}
      onChange={e =>setunamortisedcredchgs((e.target.value))}
      >
      </NumericFormat>
      <br></br>
      <label htmlFor="Liquidation">Liquidation :</label>
      <br></br>
      <select className='formatselect' name="liquidation" value={liquidation} onChange={e =>setliquidation(e.target.value)}>
          <option value="NO">NO</option>
          <option value="YES">YES</option>
        </select>
      <br></br>
      <br></br>
      <button className='registerbtn' type="button" onClick={handleUpdate}>Approve Data</button>&nbsp;
      {/*<span style={{marginLeft:"10px", backgroundColor:"blue", foregroundColor:"white", fontWeight:"bold", cursor:"pointer", border:"strong"}}><a href='/CRMS300xmlGenerated' target='_blank'>Generate</a></span>
      <button className='smalladdbtn' type="button" onClick={()=>navigate("/CRMS300.xml")}>Generate XML Data</button>
      */}
      <a className='smalladdbtn2' href={`/CRMS400CxmlGenerated?username=${username}&useremail=${useremail}&userstatus=${userstatus}`} target='_blank'>Generate xml File
      </a>
      </form>
      </div>
  <div className="column">
    <h2><u><center>View List</center></u></h2>
    <table className='table'>
        <thead>
            <tr>
              <th>S No</th>
              <th>Unique Identifier Type</th>
              <th>Unique Identifier</th>
              <th>CRMS Ref. Number</th>
              <th>Outstanding Amount</th>
              <th>Liquid ation</th>
              <th>ID</th>
          </tr>
        </thead>
        <tbody>
            {allData.map(alllist => {
              const options = {  maximumFractionDigits: 2   } 
              return(
                  <tr key={alllist.id}>
                      <td width={'15px'}>{alllist.sno}</td>
                      <td width={'15px'}>{alllist.uniqidentify1}</td>
                      <td>{alllist.uniidentifno}</td>
                      <td width={'250px'}>{alllist.crmsrefnumber}</td>
                      <td>{Intl.NumberFormat("en-US",options).format(alllist.outstandingamount)}</td>
                      <td>{alllist.liquidation}</td>
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

export default Crms400ApproveC