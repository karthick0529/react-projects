import React, { useState } from "react";
import { UseAppState } from "../Context/AppContext";
import CartItem from "./CartItem";

function CartItems() {
  const { productsData, setProductsData } = UseAppState();
  return (
    <div className="w-full flex flex-col h-fit gap-4 p-4 ">
      <p className="text-black text-xl font-extrabold">Shopping Cart</p>
      {/* <!-- Product --> */}
      {productsData.map((val, index) => (
        <CartItem key={index} val={val} index={index} />
      ))}
    </div>
  );
}

export default CartItems;