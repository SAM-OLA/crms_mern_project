import React from 'react';
import './App.css';
import NavBar from './NavBar'
import Daily from './components/Daily';
import Dailytrade from './components/DailyTrade';
import Monthly from './components/Monthly'
import Monthlytrade from './components/MonthlyTrade'
import Quarterly from './components/Quarterly'
import Semiannual from './components/Semiannual'
import Creditreturn from './components/CreditReturn'
import Home from './components/Home'
import Support from './components/Support'
import CreditApprove from './components/CreditApprove'
import {Route, Routes} from 'react-router-dom'

function App() {
return (< >
  <NavBar />
  <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/Daily"  element={<Daily />} />
    <Route path="/Monthly"  element={<Monthly />} />
    <Route path="/Quarterly"  element={<Quarterly />} />
    <Route path="/Semiannual"  element={<Semiannual />} />
    <Route path="/DailyTrade"  element={<Dailytrade />} />
    <Route path="/MonthlyTrade"  element={<Monthlytrade />} />
    <Route path="/CreditReturn"  element={<Creditreturn />} />
    <Route path="/CreditApprove"  element={<CreditApprove />} />
    <Route path="/Support"  element={<Support />} />
  </Routes>

  </>)
}

export default App;
