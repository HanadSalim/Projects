import React from "react";
import "./CSS/App.css";
import SignIn from "./Components/SignIn"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import WhatsApp from "./Components/WhatsApp";
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
