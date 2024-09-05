import React from 'react'
import {NumericFormat} from 'react-number-format'
import styyl from './styles.modules.css';
import performancerepaymentstatuscode from './data/performancerepaystatuscode.json'
import relationshiptypecode from './data/relationshiptypecode.json'
import companysizecodes from './data/companysizecodes.json'
import { useState, useEffect} from 'react';
//import { useCookies } from 'react-cookie';


function Crms401(props) {
  let flagShow = props.flag10
  console.log("Flag "+flagShow)
  //const [cookies, setCookie, removeCookie] = useCookies(['userauth']);
  //console.log(`Cookies are ${cookies.userauth[0].username}`)
  const [searchid, setsearchid] = useState("0"); 
  const [errlabel, seterrlabel] = useState("0");
  const [sno, setsno] = useState(1);
  const [uniqidentify1, setuniqidentify1] = useState("BVN");
  const [uniidentifno, setuniidentifno] = useState("0");
  const [crmsrefnumber, setcrmsrefnumber] = useState("0.00");
  const [outstandingamount, setoutstandingamount] = useState("0.00");
  const [unamortizedcreditcharges, setunamortizedcreditcharges] = useState("0.00");
  const [performancerepaymentstatus, setperformancerepaymentstatus] = useState("100");
  const [liquidation, setliquidation] = useState("NO");
  const [relationshiptype, setrelationshiptype] = useState("RT001");
  const [companysize, setcompanysize] = useState("CS001");
  const [directorid, setdirectorid] = useState("BVN");
  const [directorcode, setdirectorcode] = useState("");
  const [directoremail, setdirectoremail] = useState("");
  const [directorslist, setdirectorslist] = useState([]);
  const [allData, setAllData] = useState(0);
  const [approved, setApproved] = useState(false);
  //const [userid, setUserid] = useState(cookies.userauth[0].username);
  const [userid, setUserid] = useState("dapo");
  //cookies.get('userauth') || null
  
  
  function initializeAll(){
      console.log("Initialize All")
      console.log(sno)
      setsno(Number(sno)+1)
      setuniqidentify1("BVN");
      setuniidentifno("");
      setcrmsrefnumber("0.00");
      setoutstandingamount("0.00");
      setunamortizedcreditcharges("0.00");
      setdirectorslist([{"id":Math.random()},{"directorid":"0"},{"directorcode":"0"},{"directoremail":"0"}]);
      setperformancerepaymentstatus("100");
      setliquidation("NO");
      setrelationshiptype("");
      setcompanysize("");
      //setUserid();
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
    await fetch(`http://localhost:5000/crms401data?userid=${userid}`)
  ).json();
  setAllData(response);
};


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Status ====")
    console.log(typeof(directorslist))
    
    if((directorslist.length) === 0)
    {
      setdirectorslist([{"id":Math.random()},{"directorid":"0"},{"directorcode":"0"},{"directoremail":"0"}]);
    }
    else
    {
       setdirectorslist(Object.values(...directorslist))
    }
    const crms401data = {sno, uniqidentify1,uniidentifno,crmsrefnumber,outstandingamount,unamortizedcreditcharges,
      performancerepaymentstatus,liquidation,relationshiptype,
      companysize,directorslist,approved,userid
    }
    console.log(crms401data)
    fetch("http:localhost:5000/crms401data",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms401data)
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
    const crms401data = {sno, uniqidentify1,uniidentifno,crmsrefnumber,outstandingamount,unamortizedcreditcharges,
        performancerepaymentstatus,liquidation,relationshiptype,
        companysize,directorslist,approved,userid
    }
    
    fetch(`http://localhost:5000/crms401data?userid=${userid}&id=${searchid}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms401data)
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
        
    fetch(`http://localhost:5000/crms401data/${searchid}`,{
      method:"DELETE"
    }).then((res)=>{
      alert("Delete Successfully")
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
  }

  const handleSearch = ()=>{
    let fetchrs = fetch(`http://localhost:5000/crms401data/${searchid}`)
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
        setunamortizedcreditcharges(d.unamortizedcreditcharges);
        setperformancerepaymentstatus(d.performancerepaymentstatus);
        setliquidation(d.liquidation);
        setrelationshiptype(d.relationshiptype);
        setcompanysize(d.companysize);
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
      <h2>CRMS 401 - Update of Investment Securities</h2>
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
      <label htmlFor="Unamortized Credit Charges">Unamortized Credit Charges :</label>
      <br></br>
      <NumericFormat
      readOnly={false}
      disabled={false}
      displayType='input'
      thousandSeparator={true}
      decimalSeparator="."
      placeholder='enter unamortized credit charges'
      name="unamortizedcreditcharges" 
      value={unamortizedcreditcharges}
      onChange={e =>setunamortizedcreditcharges((e.target.value))}
      >
      </NumericFormat>
      <br></br>
      <label htmlFor="Performance Repayment Status">Performance Repayment Status :</label>
      <br></br>
        <select className='formatselect' name="performancerepaymentstatus" value={performancerepaymentstatus} onChange={e =>setperformancerepaymentstatus(e.target.value)}>
        {performancerepaymentstatuscode.map(repaymentstatuslist => (
           <option key={repaymentstatuslist.id}
           value={repaymentstatuslist.code}>{repaymentstatuslist.description}</option>
        ))
        }   
        </select>
        <br></br>
    <label htmlFor="Liquidation">Liquidation :</label>
      <br></br>
      <select className='formatselect' name="liquidation" value={liquidation} onChange={e =>setliquidation(e.target.value)}>
          <option value="NO">NO</option>
          <option value="YES">YES</option>
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

export default Crms401