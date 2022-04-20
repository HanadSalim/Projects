import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./App.css";
import RoomProvider from "./context/roomContext";


function App() {
  return (
    <div className="app">
      <div className="bar"></div>
      <div className="app__body">
         <RoomProvider>
          <Sidebar />
          
          <Chat />
        </RoomProvider>
      </div>
    </div>
  ); 
}

export default App;
