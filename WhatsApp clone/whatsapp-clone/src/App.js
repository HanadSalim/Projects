import {React,Switch, Router, Route} from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="bar"></div>
      <div className="app__body">
        <Router> 
          <Switch>
            <Route path="/">
              <h1>path to ....................</h1>
              </Route>
            <Route path="/app">
              <Sidebar />
              <Chat />
            </Route >
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
