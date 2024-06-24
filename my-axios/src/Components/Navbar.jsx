import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Route, Routes, useNavigate } from 'react-router-dom';
import ContactList from './ContactList';
import AddContacts from './AddContacts';
import EditContactPage from './EditContactPage';
import ContactDetailsPage from "./ContactDetailsPage";
import Home from "./Home";
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import './Navbar.css'; 

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="App">  
      <AppBar position="static" style = {{marginbottomm: "20px"}} >
        <Toolbar>

          <Tooltip title="Home">
            <Button className="home-button" color="inherit" onClick={() => navigate("/")} startIcon={<HomeIcon />}>
              <span>AXIOS-FETCH</span>
            </Button>
          </Tooltip>

          <div>
            <Button color="inherit" onClick={() => navigate("/Contacts")}>Contact List</Button>
            <Button color="inherit" onClick={() => navigate("/AddContacts")}>Add Contacts</Button>
          </div>

        </Toolbar>
        
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<ContactList />} />
        <Route path="/AddContacts" element={<AddContacts />} />
        <Route path="/Contacts/Edit-Contacts/:id" element={<EditContactPage />} />
        <Route path="/Contacts/:id" element={<ContactDetailsPage />} />
      </Routes>
      </div>
    </>
  );
}

export default Navbar;
