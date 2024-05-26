import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Capture from './components/Capture';
import Billing from './components/Billing';
import Signin from "./components/Signin";
import Signinaccount from './components/Signinaccount';
import Newaccount from './components/Newaccount';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Reports from './components/Reports';
import Repform from './components/Repform';
import DashForm from './components/DashForm';
import AddItem from "./components/AddItem";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signin/>}></Route>
      <Route path="/signinaccount" element={<Signinaccount/>}></Route>
      <Route path="/createacc" element={<Newaccount/>}></Route>
      <Route path='/Forgotpassword' element={<ForgotPassword/>}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/capture" element={<Capture />} />
        <Route path="/billing" element={<Billing/>}></Route>
        <Route path="/resetpassword/:token" element={<ResetPassword/>}></Route>
        <Route path="/reports" element={<Reports/>}></Route>
        <Route path="/detailsform" element={<Repform/>}></Route>
        <Route path='/dashform' element={<DashForm/>}></Route>
        <Route path='/additem' element={<AddItem/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
