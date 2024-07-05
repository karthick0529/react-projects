import React from "react";

function Home() {
  const headingStyle = {
    marginBottom: "3px",
    textAlign: "center",
  };

  const listStyle = {
    textAlign: "left",
  };

  return (
    <div>
      <h1 style={headingStyle}>Welcome to React-Redux-Task</h1>
      <h3>
        <div style={listStyle}>
          <ul>
            <li>Navigate to Product page to add / remove product to cart.</li>
            <li>
              In cart page we can select no. of items we need to purchase.
            </li>
            <li>
              Once we click the checkout button - the cart items will get reset
              and the user will be redirected to the product page
            </li>
          </ul>
        </div>
      </h3>
    </div>
  );
}

export default Home;
