import React from "react";
import Sidebar from "./Sidebar";
import "../CSS/App.css";
import RoomProvider from "../context/roomContext";
import Welcome from "./Welcome";


function WhatsApp() {
  return (
    <div className="app">
      <div className="bar"></div>
      <div className="app__body">
         <RoomProvider>
          <Sidebar />
          <Welcome />
        </RoomProvider>
      </div>
    </div>
  ); 
}

export default WhatsApp;
