import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CartPage from './components/CartPage';

// Cart context to manage cart items
export const CartContext = React.createContext();

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartpage" element={<CartPage />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
