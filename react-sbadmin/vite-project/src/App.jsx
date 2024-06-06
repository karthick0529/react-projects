import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

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
                <Route exact={true} path="/" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
