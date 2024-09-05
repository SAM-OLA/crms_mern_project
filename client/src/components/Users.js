import React from 'react'
import styyl from './styles.modules.css';
import { useState, useEffect} from 'react';




function Users(props) {
  let flagShow = props.flag
  const newusername = props.username
  const newuseremail = props.usermail
  const newuserstatus = props.userstatus
  console.log("Flag "+flagShow)
  console.log("Name "+newusername)
  console.log("EMAIL "+newuseremail)
  console.log("AUTHORIZER "+newuserstatus)

  const [searchid, setsearchid] = useState("0"); 
  const [errlabel, seterrlabel] = useState("0");
  const [sno, setsno] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [authorizer, setAuthorizer] = useState("false");
  //const [userid, setUserid] = useState(newusername);
  const [allData, setAllData] = useState(0);  
  
  function initializeAll(){
      console.log("Initialize All")
      console.log(sno)
      setsno(Number(sno)+1)
      setUsername("")
      setPassword("");
      setEmail("");
      setAuthorizer("false");
     }
   
     
 useEffect(() => {
  fetchAllData()
  .then(response=>{
    console.log("All data fetched")
  })
}, [sno])

const fetchAllData = async () => {
  let response = await (
    await fetch(`http://localhost:5000/users`)
  ).json();
  setAllData(response);
};


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Status ====")
    
    const userdata = {sno, username,password,email,authorizer}
    console.log(userdata)
    fetch("http://localhost:5000/users",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(userdata)
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
    const userdata = {sno, username,password,email,authorizer}
    console.log("What is ID --- "+searchid)
    console.log("Update Here oooo!!!"+userdata)
    fetch(`http://localhost:5000/users/${searchid}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(userdata)
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
        
    fetch(`http://localhost:5000/users/${searchid}`,{
      method:"DELETE"
    }).then((res)=>{
      alert("Delete Successfully")
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
  }

  const handleSearch = ()=>{
    let fetchrs = fetch(`http://localhost:5000/users/${searchid}`)
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
        setsno(d.id)
        setUsername(d.username)
        setPassword(d.password);
        setEmail(d.email);
        setAuthorizer(d.authorizer);
        
      }
    ).catch(console.err)
    }

  if (flagShow)
  {
  return (
    <React.Fragment>
      <h2>Add Users</h2>
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
      <label htmlFor="Username">Username :</label>
      <br></br>
      <input type='text' required placeholder='enter correct username' name="username" value={username} onChange={e =>setUsername(e.target.value)}></input>
      <br></br>
      <label htmlFor="Password">Password :</label>
      <br></br>
      <input type='password' required placeholder='enter correct password' name="password" value={password} onChange={e =>setPassword(e.target.value)}></input>
      <br></br>
      <label htmlFor="Email">Email :</label>
      <br></br>
      <input type='text' required placeholder='enter correct Email' name="email" value={email} onChange={e =>setEmail(e.target.value)}></input>
      <br></br>
      <label htmlFor="Authorizer">Authorizer Status :</label>
      <br></br>
      <select className='formatselect' name="authorizer" value={authorizer} onChange={e =>setAuthorizer(e.target.value)}>
          <option value="False">False</option>
          <option value="True">True</option>
        </select>
      <br></br>
      <button className='registerbtn' type="submit">Save Data</button>&nbsp;
      <button className='viewbtn' type="button" onClick={handleUpdate}>Update Data</button>&nbsp;
      <button className='cancelbtn' type="button" onClick={handleDelete}>Delete</button>&nbsp;
      
      </form>
      </div>
  <div className="column">
    <h2><u><center>View List</center></u></h2>
    <table className='table'>
        <thead>
            <tr>
              <th>Username</th>
              <th>Email Address</th>
              <th>Authorizer ?</th>
              <th>ID</th>
          </tr>
        </thead>
        <tbody>
            {allData.map(alllist => {
              return(
                  <tr key={alllist.id}>
                      <td>{alllist.username}</td>
                      <td>{alllist.email}</td>
                      <td>{alllist.authorizer}</td>
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

export default Users