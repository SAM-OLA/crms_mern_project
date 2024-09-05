import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation} from 'react-router-dom';


function NavBar() {
  const location = useLocation();
  const logdata = location.state;
  console.log("Data from Nav "+logdata)
  if(logdata){
  return (
    <div className="topnav">
        <Link className="active" to="/">Home</Link>
        {/*<Link to="/Daily">Daily</Link>
        <Link to="/Monthly">Monthly</Link>
        <Link to="/Quarterly">Quarterly</Link>
        <Link to="/Semiannual">Semiannual</Link>
        <Link to="/Dailytrade">Daily(Trade)</Link>
        <Link to="/Monthlytrade">Monthly(Trade)</Link>*/}
        <Link to="/CreditReturn" state={logdata}>CRMS(Risk)</Link>
        <Link to="/CreditApprove" state={logdata}>CRMS (Approval)</Link>
        <Link to="/Support" state={logdata}>Support Files</Link>
</div>
  )
 }
}

export default NavBar