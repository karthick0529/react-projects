import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Table from './components/Table';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/tables" component={Table} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
