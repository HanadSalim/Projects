import React from "react";
import "./App.css";
import SignIn from "./SignIn"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import WhatsApp from "./WhatsApp";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/app" element={<WhatsApp/>} />
      </Routes>
    </Router>
  ); 
}

export default App;
