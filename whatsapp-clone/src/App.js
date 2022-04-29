import React from "react";
import "./CSS/App.css";
import SignIn from "./Components/SignIn"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import WhatsApp from "./Components/WhatsApp";
import UserProvider from "./context/userContext";
function App() {
  return (
     <UserProvider>
       <Router>
          <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/app" element={<WhatsApp/>} />
          </Routes>
      </Router> 
    </UserProvider>
  ); 
}

export default App;
