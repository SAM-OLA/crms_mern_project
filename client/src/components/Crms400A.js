import React from 'react'
import styyl from './styles.modules.css';
import { useState, useEffect} from 'react';
//import { useCookies } from 'react-cookie';


function Crms400A(props) {
  let flagShow = props.flag7
  console.log("Flag "+flagShow)
  //const [cookies, setCookie, removeCookie] = useCookies(['userauth']);
  //console.log(`Cookies are ${cookies.userauth[0].username}`)
  const [searchid, setsearchid] = useState("0"); 
  const [errlabel, seterrlabel] = useState("0");
  const [sno, setsno] = useState(1);
  const [uniqidentify1, setuniqidentify1] = useState("BVN");
  const [uniidentifno, setuniidentifno] = useState("0");
  const [crmsrefnumber, setcrmsrefnumber] = useState("0.00");
  const [tenor, settenor] = useState("0");
  const [startDate, setStartDate] = useState("0"); 
  const [expiryDate, setExpiryDate] = useState("0");
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
      settenor("0");
      setStartDate("0"); 
      setExpiryDate("0");
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
    await fetch(`http://localhost:5000/crms400Adata?userid=${userid}`)
  ).json();
  setAllData(response);
};


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Status ====")
    
    const crms400Adata = {sno, uniqidentify1,uniidentifno,crmsrefnumber,startDate,tenor,expiryDate,approved,userid
    }
    console.log(crms400Adata)
    fetch("http:localhost:5000/crms400Adata",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms400Adata)
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
    const crms400Adata = {sno, uniqidentify1,uniidentifno,crmsrefnumber, startDate,tenor,expiryDate,approved,userid
    }
    
    fetch(`http://localhost:5000/crms400Adata?userid=${userid}&id=${searchid}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms400Adata)
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
        
    fetch(`http://localhost:5000/crms400Adata/${searchid}`,{
      method:"DELETE"
    }).then((res)=>{
      alert("Delete Successfully")
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
  }

  const handleSearch = ()=>{
    let fetchrs = fetch(`http://localhost:5000/crms400Adata/${searchid}`)
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
        settenor(d.tenor);
        setStartDate(d.startDate); 
        setExpiryDate(d.expiryDate);
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
      <h2>CRMS 400A - Rendering of Rolled-Over Facility</h2>
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

export default Crms400A