import React from "react";
import Signin from "./components/Signin.jsx"
import Signinaccount from "./components/Signinaccount.jsx"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx"
function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/Signinaccount" element={<Signinaccount/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  )
}
export default App;
