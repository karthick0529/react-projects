import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { CartContext } from '../App';

function Navbar() {
  // CartContext to access cart items
  const cart = useContext(CartContext);
  const [cartItems, setCartItems] = cart;

  // State for theme mode
  const [mode, setMode] = useState("light");
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const tool_bar = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" style={{ marginBottom: "20px" }}>
        <Toolbar style={tool_bar}>
          <div>
            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            <Button
              color="inherit"
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              startIcon={mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
            >
              {mode === "light" ? "Dark" : "Light"} Mode
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              endIcon={
                <Badge badgeContent={cartItems} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              }
              onClick={() => navigate("/cartpage")}
            >
              Cart Items
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
