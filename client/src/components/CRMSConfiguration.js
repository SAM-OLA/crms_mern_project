import React from 'react'
import styyl from './styles.modules.css';
import { useState, useEffect} from 'react';

function CRMSConfiguration(props) {
  let flagShow = props.flag0
  console.log("Flag "+flagShow)
  const [sno, setsno] = useState(1);
  const [bankcode, setbankcode] = useState("");
  const [bankname, setbankname] = useState("");
  const [reportdate, setreportdate] = useState("");
  const [authsign1, setauthsign1] = useState("");
  const [designation1, setdesignation1] = useState("");
  const [position, setposition] = useState("");
  const [telephonenumber1, settelephonenumber1] = useState("");
  const [extention1, setextention1] = useState("");
  const [contactname, setcontactname] = useState("");
  const [designation2, setdesignation2] = useState("");
  const [telephonenumber2, settelephonenumber2] = useState("");
  const [extention2, setextention2] = useState("");
  const [preparedby, setpreparedby] = useState("");
  const [bankscontactphone, setbankscontactphone] = useState("");
  const [banksphoneextention, setbanksphoneextention] = useState("");
  const [finacctdate, setfinacctdate] = useState("");
  const [cbnlastexamdate, setcbnlastexamdate] = useState("");
  
  const handleUpdate = (event) => {
    event.preventDefault();
    const crmsconfigdata = {sno, bankcode,bankname,reportdate,authsign1,
        designation1,position,telephonenumber1,extention1,contactname,designation2,
        telephonenumber2,extention2,preparedby,bankscontactphone,banksphoneextention,finacctdate,cbnlastexamdate
    }
    
    fetch(`http://localhost:5000/crmsconfigdata/1`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crmsconfigdata)
    }).then((res)=>{
      alert("Update Successfully")
      //window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
    
  }


  useEffect(()=>{
          let fetchrs = fetch(`http://localhost:5000/crmsconfigdata/1`)
      fetchrs.then(res=>{
        if (res.status >= 400) {
          alert("Record Does Not Exist !!!")
          console.log("Record Does Not Exist !!!")
          //throw new Error("Server responds with error!")
      }
        return res.json()
      })
        .then(d=>{
          console.log(d);
          setsno(d.sno);
          setbankcode(d.bankcode);
          setbankname(d.bankname);
          setreportdate(d.reportdate);
          setauthsign1(d.authsign1)
          setdesignation1(d.designation1);
          setposition(d.position);
          settelephonenumber1(d.telephonenumber1);
          setextention1(d.extention1);
          setcontactname(d.contactname);
          setdesignation2(d.designation2);
          settelephonenumber2(d.telephonenumber2);
          setextention2(d.extention2);
          setpreparedby(d.preparedby);
          setbankscontactphone(d.bankscontactphone);
          setbanksphoneextention(d.banksphoneextention);
          setfinacctdate(d.finacctdate);
          setcbnlastexamdate(d.cbnlastexamdate);
          
        }
      ).catch(console.err)
      },[])
  

  
  if (flagShow)
  {
  return (
    <React.Fragment>
      <h2><u>CRMS Configuration Form</u></h2>
<div className="row">
<div className="column1">
</div>
  <div className="column">
      <form  className={styyl.body} onSubmit={handleUpdate}>
        
      <label htmlFor="sno">SNO :</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <input type="text" placeholder="Enter a serial number" required name="sno" value={sno} onChange={e =>setsno(e.target.value)}></input>
      <br></br>
      <label htmlFor="Bank Code">Bank Code :</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <input type='text' required placeholder='enter bank code' name="bankcode" value={bankcode} onChange={e =>setbankcode(e.target.value)}></input>
        <br></br>
        <label htmlFor="Bank Name">Bank Name :</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <input type='text' required placeholder='enter bank name' name="bankname" value={bankname} onChange={e =>setbankname(e.target.value)}></input>
      <br></br>
       <label htmlFor="report date">Report Date :</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <input type='date' required placeholder="dd-mm-yyyy" name="reportdate" value={reportdate} onChange={e =>setreportdate(e.target.value)}  min="1997-01-01" max="2030-12-31"></input>
      <br></br>
      <label htmlFor="authsign1">Authorized Signatory :</label>&emsp;&emsp;&emsp;
      <input type='text' required placeholder='enter authorized signatory 1' name="authsign1" value={authsign1} onChange={e =>setauthsign1(e.target.value)}></input>
      <br></br>
      <label htmlFor="designation">Designation :</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
      <input type='text' required placeholder='enter designation' name="designation1" value={designation1} onChange={e =>setdesignation1(e.target.value)}></input>
        <br></br>
      <label htmlFor="position">Position :</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <input type='text' required placeholder='enter position' name="position" value={position} onChange={e =>setposition(e.target.value)}></input>
      <br></br>
      <label htmlFor="Telephone Number">Telephone Number :</label>&emsp;&emsp;&emsp;&emsp;&nbsp;
      <input type='text' required placeholder='enter telephone number' name="telephonenumber1" value={telephonenumber1} onChange={e =>settelephonenumber1(e.target.value)}></input>
      <br></br>
      <label htmlFor="Extention">Extention :</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
      <input type='text' required placeholder='enter telephone extention' name="extention1" value={extention1} onChange={e =>setextention1(e.target.value)}></input>
      <br></br>
      <label htmlFor="Contact Name">Contact Name :</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
      <input type='text' required placeholder='enter contact name' name="contactname" value={contactname} onChange={e =>setcontactname(e.target.value)}></input>
      <br></br>
      <label htmlFor="Designation">Designation :</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
      <input type='text' required placeholder='enter designation' name="designation2" value={designation2} onChange={e =>setdesignation2(e.target.value)}></input>
      <br></br>
      <label htmlFor="Telephone Number">Telephone Number :</label>&emsp;&emsp;&emsp;&emsp;&nbsp;
      <input type='text' required placeholder='enter telephone number' name="telephonenumber2" value={telephonenumber2} onChange={e =>settelephonenumber2(e.target.value)}></input>
      <br></br>
      <label htmlFor="Extention">Extention :</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
      <input type='text' required placeholder='enter telephone extention' name="extention2" value={extention2} onChange={e =>setextention2(e.target.value)}></input>
      <br></br>
      <label htmlFor="PreparedBy">Prepared By :</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
      <input type='text' required placeholder='enter prepared by' name="preparedby" value={preparedby} onChange={e =>setpreparedby(e.target.value)}></input>
      <br></br>
      <label htmlFor="bankcontactphone">Bank's Contact Phone :</label>&emsp;&emsp;&emsp;&nbsp;
      <input type='text' required placeholder='enter banks contact phone' name="bankscontactphone" value={bankscontactphone} onChange={e =>setbankscontactphone(e.target.value)}></input>
      <br></br>
      <label htmlFor="bankphoneextention">Bank's Phone Extention:</label>&emsp;&emsp;&emsp;
      <input type='text' required placeholder='enter banks phone extention' name="banksphoneextention" value={banksphoneextention} onChange={e =>setbanksphoneextention(e.target.value)}></input>
      <br></br>
      <label htmlFor="finacctdate">Financial Accounting Date:</label>&emsp;&emsp;
      <input type='date' required placeholder='dd/mm/yyyy' name="finacctdate" value={finacctdate} onChange={e =>setfinacctdate(e.target.value)} min="1997-01-01" max="2030-12-31"></input>
      <br></br>
      <label htmlFor="cbnlastexamdate">CBN NDIC Last Exam Date :</label>&emsp;&nbsp;
      <input type='date' required placeholder='dd/mm/yyyy' name="cbnlastexamdate" value={cbnlastexamdate} onChange={e =>setcbnlastexamdate(e.target.value)} min="1997-01-01" max="2030-12-31"></input>
      <br></br>
      <button className='registerbtn' type="submit">Save Data</button>
      </form>
      </div>      
  <div className="column1">
    
  </div>
</div>
    </React.Fragment>

  )
  }
}

export default CRMSConfiguration