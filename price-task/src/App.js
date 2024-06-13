import React from "react";
import "./App.css";

function App() {
  const plans = [
    {
      title: "FREE",
      price: "$0/month",
      features: [
        { name: "Single User", available: true },
        { name: "50GB Storage", available: true },
        { name: "Unlimited Public Projects", available: true },
        { name: "Community Access", available: true },
        { name: "Unlimited Private Projects", available: false },
        { name: "Dedicated Phone Support", available: false },
        { name: "Free Subdomain", available: false },
        { name: "Monthly Status Reports", available: false },
      ],
    },
    {
      title: "PLUS",
      price: "$9/month",
      features: [
        { name: "5 Users", available: true },
        { name: "50GB Storage", available: true },
        { name: "Unlimited Public Projects", available: true },
        { name: "Community Access", available: true },
        { name: "Unlimited Private Projects", available: true },
        { name: "Dedicated Phone Support", available: true },
        { name: "Free Subdomain", available: true },
        { name: "Monthly Status Reports", available: false },
      ],
    },
    {
      title: "PRO",
      price: "$49/month",
      features: [
        { name: "Unlimited Users", available: true },
        { name: "50GB Storage", available: true },
        { name: "Unlimited Public Projects", available: true },
        { name: "Community Access", available: true },
        { name: "Unlimited Private Projects", available: true },
        { name: "Dedicated Phone Support", available: true },
        { name: "Free Subdomain", available: true },
        { name: "Monthly Status Reports", available: true },
      ],
    },
  ];

  return (
    <div className="App">
      <div className="pricing-cards">
        {plans.map((plan) => (
          <div className="card" key={plan.title}>
            <h2>{plan.title}</h2>
            <h3>{plan.price}</h3>
            <ul>
              {plan.features.map((feature) => (
                <li
                  key={feature.name}
                  className={feature.available ? "available" : "unavailable"}
                >
                  {feature.name}
                </li>
              ))}
            </ul>
            <button>BUTTON</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;