import React, { useState } from "react";
import { UseAppState } from "../Context/AppContext";

function CartItem({ val, index }) {
  const { setSubtotal } = UseAppState();

  const [itemCount, setItemCount] = useState(1);
  const [stockCount, setStockCount] = useState(val.stock);
  const discountprice = val.price - val.price * (val.discountPercentage / 100);
  const [discountPercentage, setDiscountPercentage] = useState(discountprice);
  return (
    <div className="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm">
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        {/* <!-- Product Information --> */}
        <div className="flex flex-row gap-6 items-center">
          <div className="w-28 h-28">
            <img
              className="w-full h-full"
              src={val.thumbnail}
              alt={val.title}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg text-gray-800 font-semibold">{val.title}</p>
            <p className="text-xs text-gray-600 font-semibold">
              Brand: <span className="font-normal">{val.brand}</span>
            </p>
            <p className="text-xs text-gray-600 font-semibold">
              Description:{" "}
              <span className="font-normal">{val.description}</span>
            </p>
          </div>
        </div>
        {/* <!-- Price Information --> */}
        <div className="self-center text-center">
          <p className="text-gray-800 font-normal text-xl">
            <span className="text-red-500 mr-2">
              -{val.discountPercentage}%
            </span>
            ${discountPercentage.toFixed(2)}
          </p>
          <p className="text-gray-600 font-normal text-sm">
            <span>List Price: </span>
            <span className="line-through">${val.price}</span>
          </p>
          <p className="text-green-600 font-normal text-sm">
            <span>In Stock: </span>
            <span>{stockCount}</span>
          </p>
        </div>
        {/* <!-- Remove Product Icon --> */}
        <div className="self-center">
          <button
            className=""
            onClick={() => {
              setSubtotal((previousSubtotal) => {
                return previousSubtotal - discountPercentage * (itemCount - 1);
              });
              setItemCount(1);
              setStockCount(val.stock);
            }}
          >
            <svg
              className=""
              height="24px"
              width="24px"
              id="Layer_1"
              style={{ background: "new 0 0 512 512" }}
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path d="M400,113.3h-80v-20c0-16.2-13.1-29.3-29.3-29.3h-69.5C205.1,64,192,77.1,192,93.3v20h-80V128h21.1l23.6,290.7   c0,16.2,13.1,29.3,29.3,29.3h141c16.2,0,29.3-13.1,29.3-29.3L379.6,128H400V113.3z M206.6,93.3c0-8.1,6.6-14.7,14.6-14.7h69.5   c8.1,0,14.6,6.6,14.6,14.7v20h-98.7V93.3z M341.6,417.9l0,0.4v0.4c0,8.1-6.6,14.7-14.6,14.7H186c-8.1,0-14.6-6.6-14.6-14.7v-0.4   l0-0.4L147.7,128h217.2L341.6,417.9z" />
                <g>
                  <rect height="241" width="14" x="249" y="160" />
                  <polygon points="320,160 305.4,160 294.7,401 309.3,401" />
                  <polygon points="206.5,160 192,160 202.7,401 217.3,401" />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
      {/* <!-- Product Quantity --> */}
      <div className="flex flex-row self-center gap-1">
        <button className="w-5 h-5 self-center rounded-full border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => {
              if (itemCount >= 2) {
                setItemCount(itemCount - 1);
                setStockCount(stockCount + 1);
                setSubtotal(
                  (previousSubtotal) => previousSubtotal - discountPercentage
                );
              }
            }}
          >
            <path d="M5 12h14" />
          </svg>
        </button>
        <input
          type="text"
          readOnly="readonly"
          value={itemCount}
          className="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm"
        />
        <button
          className="w-5 h-5 self-center rounded-full border border-gray-300"
          onClick={() => {
            if (stockCount >= 1) {
              setItemCount(itemCount + 1);
              setStockCount(stockCount - 1);
              setSubtotal(
                (previousSubtotal) => previousSubtotal + discountPercentage
              );
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill=""
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartItem;