import React from 'react'
import styyl from './styles.modules.css';
import { useState, useEffect} from 'react';
//import { useCookies } from 'react-cookie';


function Crms600(props) {
  let flagShow = props.flag5
  console.log("Flag "+flagShow)
  //const [cookies, setCookie, removeCookie] = useCookies(['userauth']);
  //console.log(`Cookies are ${cookies.userauth[0].username}`)
  const [searchid, setsearchid] = useState("0"); 
  const [errlabel, seterrlabel] = useState("0");
  const [sno, setsno] = useState(1);
  const [synrefnumber, setsynrefnumber] = useState("0");
  const [syndicationname, setsyndicationname] = useState("NO");
  const [syndicationtotalamount, setsyndicationtotalamount] = useState("NIL");
  const [participatingbankcode, setparticipatingbankcode] = useState("0.00");
  const [allData, setAllData] = useState(0);
  const [approved, setApproved] = useState(false);
  const [userid, setUserid] =useState(0);
  //const [userid, setUserid] = useState(cookies.userauth[0].username);
  //cookies.get('userauth') || null
  
  
  function initializeAll(){
      console.log("Initialize All")
      console.log(sno)
      setsno(Number(sno)+1)
      setsynrefnumber("0");
      setsyndicationname("NO");
      setsyndicationtotalamount("0.00");
      setparticipatingbankcode("NIL");
      
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
    await fetch(`http://localhost:5000/crms600data?userid=${userid}`)
  ).json();
  setAllData(response);
};


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Status ====")
    console.log(typeof(feeslist))
    
    const crms600data = {
        sno, synrefnumber, syndicationname, syndicationtotalamount, participatingbankcode,approved,userid
    }
    console.log(crms600data)
    fetch("http:localhost:5000/crms600data",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms600data)
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
    const crms600data = {
        sno, synrefnumber, syndicationname, syndicationtotalamount, participatingbankcode,approved,userid
    }
    
    fetch(`http://localhost:5000/crms600data?userid=${userid}&id=${searchid}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crms600data)
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
        
    fetch(`http://localhost:5000/crms600data/${searchid}`,{
      method:"DELETE"
    }).then((res)=>{
      alert("Delete Successfully")
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
  }

  const handleSearch = ()=>{
    let fetchrs = fetch(`http://localhost:5000/crms600data/${searchid}`)
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
        setsynrefnumber(d.synrefnumber);
        setsyndicationname(d.syndicationname);
        setsyndicationtotalamount(d.syndicationtotalamount);
        setparticipatingbankcode(d.participatingbankcode);
        setApproved(d.approved)
        //setUserid(cookies.userauth[0].username)

      }
    ).catch(console.err)
    }

  if (flagShow)
  {
  return (
    <React.Fragment>
      <h2>CRMS 600 - Register Syndication Information</h2>
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
      <label htmlFor="Syndication Reference Number">Syndication Ref. No :</label>
      <br></br>
      <input type='text' placeholder='enter ref number' name="synrefnumber" value={synrefnumber} onChange={e =>setsynrefnumber(e.target.value)}></input>
      <br></br>
      <label htmlFor="Syndication Name">Syndication Name :</label>
      <br></br>
      <input type='text' placeholder='enter syndication name' name="synname" value={syndicationname} onChange={e =>setsyndicationname(e.target.value)}></input>
      <br></br>
      <label htmlFor="Syndication Total Amount">Syndication Total Amount :</label>
      <br></br>
      <input type='text' placeholder='enter syn total amount' name="syntotalamount" value={syndicationtotalamount} onChange={e =>setsyndicationtotalamount(e.target.value)}></input>
      <br></br>
      <label htmlFor="Syndication Participating Bank">Syndication Participating :</label>
      <br></br>
      <input type='text' placeholder='enter syn participating bank' name="synparticipatingbank" value={participatingbankcode} onChange={e =>setparticipatingbankcode(e.target.value)}></input>
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

export default Crms600