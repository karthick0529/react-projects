import React from "react";
import SchoolProvider from "./SchoolContext";
import Classroom from "./Classroom";
import Home from "./Home";
import Parotta from "./Parotta";

function App() {
  return(
    // <SchoolProvider>
    //   <Classroom />
    // </SchoolProvider>
    // <Home />
    <Parotta />
  )
}

export default App