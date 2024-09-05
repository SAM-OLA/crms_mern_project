import React, { useState } from 'react'
import { useLocation} from 'react-router-dom';
import styles from './mystyles.module.css'; 
import Users from './Users'

function Support() {
  const location = useLocation();
  const logdata = location.state;
  const [flag, setFlag] = useState(false);
  
   function handleToggle(){
      setFlag(!flag)
      console.log(flag)
    }
  
  
    return (
        <div>
          <div>
          <div><h3>Current User - {logdata.username} Email - {logdata.email}</h3></div>
            <div className={styles.content}>
            <button className={styles.collapsible} onClick={handleToggle}>Create Users Profile</button>
                <Users flag={flag} username={logdata.username} usermail={logdata.email} userstatus={logdata.authorizer}/>
            </div>
          </div>
          
        </div>
        
    )
  
}

export default Support