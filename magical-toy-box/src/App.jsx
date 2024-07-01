import React from "react";
import SchoolProvider from "./SchoolContext";
import Classroom from "./Classroom";
import Home from "./Home";
import Parotta from "./Parotta";
import { Routes,Route,Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Users from "./components/Users"

function App() {
  return(
    // <SchoolProvider>
    //   <Classroom />
    // </SchoolProvider>
    // <Home />
    // <Parotta />
    <div>
      <nav>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to = "/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}> </Route>
        <Route path="/users" element={<Users />}> </Route>
      </Routes>
    </div>
  )
}


export default App