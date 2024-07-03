import React from "react";
import SchoolProvider from "./SchoolContext";
import Classroom from "./Classroom";
import Home from "./Home";
import Parotta from "./Parotta";
import { Routes,Route,Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Users from "./components/Users"
import Pizza from "./Pizza";
import WithToppings from "./WithToppings";
import HigherOrderComponent from "./HigherOrderComponent";


// const EnhancedPizza = WithToppings(Pizza);
function App() {
  return(
    // <SchoolProvider>
    //   <Classroom />
    // </SchoolProvider>
    // <Home />
    // <Parotta />
    <div>
      {/* <nav>
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
      </Routes> */}

      {/* <Pizza toppings="No toppings"></Pizza>
      <EnhancedPizza></EnhancedPizza> */}

      < HigherOrderComponent />

    </div>
  )
}


export default App