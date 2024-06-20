import React, { createContext, useContext, useState } from "react";
import data from "../assets/products-data.json";

export const AppCtx = createContext();

function AppContext({ children }) {
  const [productsData, setProductsData] = useState(data);
  const totalProducts = productsData.length;
  const initialSubtotalValue = () => {
    return productsData.reduce((acc, val) => {
      let discountPrice = parseFloat(
        (val.price - val.price * (val.discountPercentage / 100)).toFixed(2)
      );
      let subtotal = acc + discountPrice;
      return subtotal;
    }, 0);
  };
  const [subtotal, setSubtotal] = useState(() => initialSubtotalValue());

  return (
    <div>
      <AppCtx.Provider
        value={{
          productsData,
          setProductsData,
          subtotal,
          setSubtotal,
          totalProducts,
        }}
      >
        {children}
      </AppCtx.Provider>
    </div>
  );
}

export default AppContext;

export function UseAppState() {
  return useContext(AppCtx);
}