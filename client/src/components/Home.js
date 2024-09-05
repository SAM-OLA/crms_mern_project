import { useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import styyl from './homestyles.modules.css';
import axios from 'axios'
//import NavBar from '../NavBar'
//import { useCookies } from 'react-cookie';

function Home() {
  const [uname, setuname] = useState(""); 
  const [passwd, setpasswd] = useState("");
  const [data1, setData1] = useState("")
  //const [usename, setUsename] = useState("Muyiwa")
  const navigate = useNavigate()
  //const [cookies, setCookie, removeCookie] = useCookies(['grass']);
  //const cookies = new Cookies();

  //removeCookie('userauth')

  useEffect(()=>{
    axios.get(`http://localhost:5000/users?username=${uname}&password=${passwd}`)
    .then(res=>setData1(res.data))
    .catch(err=>console.log(err)) 
    },[uname,passwd])

    const handleSubmit = (event) => {
      event.preventDefault();
      
      if(data1.length===1){
        console.log(data1[0].username)
    //    setUsename(data1[0].username)
        if(data1[0].authorizer==="True")
        {
                console.log("State Sent out "+data1[0])
                navigate("/NavBar",{state:data1[0]})   
                navigate("/CreditApprove",{state:data1[0]})   
        }
          else
          {
                console.log("State Sent out "+data1[0])
                navigate("/NavBar",{state:data1[0]})   
                navigate("/CreditReturn",{state:data1[0]})   
          }
        //const expirationTime = new Date(new Date().getTime() + 60000);
        //setCookie('userauth','data1',{path:'/'},{ expires: expirationTime }, {secure: false, SameSite: 'none'})
        //cookies.set("userauth",data1,{path:'/'},{ expires: expirationTime }, {secure: false, sameSite: 'none'});
        //console.log(`Hello Cookie --- ${cookies}`)
      }
      else alert('Incorrect Credentials ')  
    }
  return (
    <div>
        <header className="App-header">
      
      
        <h2>Cube Report Manager Application</h2>
        <h3><i>CBN EFASS-FINA Reports Manager</i></h3>
       <a
        className="App-link"
        href="https://dtsolutions.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        by D & T Solutions Coy
      </a>
      <form className={styyl}>
        <input 
          name="uname" 
          type="text" 
          placeholder='Enter Username' 
          value={uname}  
          onChange={e =>setuname(e.target.value)}
        >
        </input>
        <br />
        <input 
          name="passwd" 
          type="password" 
          placeholder='Enter Password' 
          value={passwd}  
          onChange={e =>setpasswd(e.target.value)}
        >
        </input>
        <br />
        <center><button variant="contained"  className='registerbtn'  onClick={handleSubmit}>Enter Site</button></center>
      </form>

    </header>
    </div>
  )
}

export default Home