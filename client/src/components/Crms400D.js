import React from 'react'
import {NumericFormat} from 'react-number-format'
import styyl from './styles.modules.css';
import { useState, useEffect} from 'react';

function Crms400D(props) {
  let flagShow = props.flag2
  console.log("Flag "+flagShow)
  const [searchid, setsearchid] = useState(""); 
  const [errlabel, seterrlabel] = useState("");
  const [sno, setsno] = useState(1);
  const [uniqidentify1, setuniqidentify1] = useState("BVN");
  const [uniidentifno, setuniidentifno] = useState("");
  const [crmsrefnumber, setcrmsrefnumber] = useState("0.00");
  const [outstandingamount, setoutstandingamount] = useState("0.00");
  const [monthenddate, setmonthenddate] = useState("0");
  const [repayagreemode, setrepayagreemode] = useState("100");
  const [tbibankcharges, settbibankcharges] = useState("");
  const [tbicreditwriteoff, settbicreditwriteoff] = useState("0.00");
  const [tbicreditdrawdown, settbicreditdrawdown] = useState("BVN");
  const [tcicredit, settcicredit] = useState("");
  const [tcicredittrntype, settcicredittrntype] = useState("");
  const [tcidebitamount, settcidebitamount] = useState("");
  const [tcidebittrxn, settcidebittrxn] = useState("");
  const [unamortisedcredchgs, setunamortisedcredchgs] = useState("");
  const [approved, setapproved] = useState("false");
  const [allData, setAllData] = useState([]);
  
     function initializeAll(){
      console.log("Initialize All")
      console.log(sno)
      setsno(Number(sno)+1)
      setuniqidentify1("BVN");
      setuniidentifno("");
      setcrmsrefnumber("0");
      setoutstandingamount("0.00");
      setmonthenddate("0");
      setrepayagreemode("100");
      settbibankcharges("0.00");
      settbicreditwriteoff("0.00");
      settbicreditdrawdown("0.00");
      settcicredit("0.00");
      settcicredittrntype("0.00");
      settcidebitamount("0.00");
      settcidebittrxn("0.00");
      setunamortisedcredchgs("0.00")
     }
   
  
 useEffect(() => {
  fetchAllData()
  .then(response=>{
    console.log("All data fetched")
  })
}, [sno])

const fetchAllData = async () => {
  let response = await (
    await fetch("http://localhost:5000/crms400Ddata")
  ).json();
  setAllData(response);
};


  const handleSubmit = (event) => {
    event.preventDefault();
    const crms400Ddata = {sno, uniqidentify1,uniidentifno,crmsrefnumber,outstandingamount,
      monthenddate,tbibankcharges,tbicreditwriteoff,tbicreditdrawdown,tcicredit,tcicredittrntype,
      tcidebitamount,tcidebittrxn,unamortisedcredchgs,approved
    }
    console.log(crms400Ddata)
    fetch("http://localhost:5000/crms400Ddata",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms400Ddata)
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
    const crms400Ddata = {sno, uniqidentify1,uniidentifno,crmsrefnumber,outstandingamount,
      monthenddate,tbibankcharges,tbicreditwriteoff,tbicreditdrawdown,tcicredit,tcicredittrntype,
      tcidebitamount,tcidebittrxn,unamortisedcredchgs,approved
    }
    
    fetch(`http://localhost:5000/crms400Ddata/${searchid}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms400Ddata)
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
    fetch(`http://localhost:5000/crms400Ddata/${searchid}`,{
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
    let fetchrs = fetch(`http://localhost:5000/crms400Ddata/${searchid}`)
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
      setmonthenddate(d.monthenddate);
      settbibankcharges(d.tbibankcharges);
      settbicreditwriteoff(d.tbicreditwriteoff);
      settbicreditdrawdown(d.tbicreditdrawdown);
      settcicredit(tcicredit);
      settcicredittrntype(d.tcicredittrntype);
      settcidebitamount(d.settcidebitamount);
      settcidebittrxn(d.tcidebittrxn);
      setunamortisedcredchgs(d.unamortisedcredchgs)
      

      }
    ).catch(console.err)
    }

  if (flagShow)
  {
  return (
    <React.Fragment>
      <h2>CRMS 400D - Update of Month End Balances</h2>
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
      <label htmlFor="Month End Date">Month End Date :</label>
      <br></br>
        <input type="date" name="monthenddate" placeholder="dd-mm-yyyy" value={monthenddate} onChange={e => setmonthenddate(e.target.value)} min="1997-01-01" max="2030-12-31"></input>
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
      name="tcidebittrxn" 
      value={tcidebittrxn}
      onChange={e =>settcidebittrxn((e.target.value))}
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
      <button className='registerbtn' type="submit">Save Data</button>
      <button className='viewbtn' type="button" onClick={handleUpdate}>Update Data</button>
      <button className='cancelbtn' type="button" onClick={handleDelete}>Delete</button>
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
              <th>Liquidation</th>
              <th>ID</th>
          </tr>
        </thead>
        <tbody>
            {allData.map(alllist => {
              return(
                  <tr key={alllist.id}>
                      <td>{alllist.sno}</td>
                      <td>{alllist.uniqidentify1}</td>
                      <td>{alllist.uniidentifno}</td>
                      <td>{alllist.crmsrefnumber}</td>
                      <td>{alllist.outstandingamount}</td>
                      <td>{alllist.monthenddate}</td>
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

export default Crms400D