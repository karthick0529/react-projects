import React from "react";
import { useState } from "react";

function Card() {
  const [show, setShow] = useState(true);
  const data = [
    {
      color: "primary",
      text: "Earnings (Monthly)",
      amount: "$40,000",
      icon: "fas fa-calendar",
    },
    {
      color: "success",
      text: "Earnings (Annual)",
      amount: "$215,000",
      icon: "fas fa-dollar-sign",
    },
    {
      color: "info",
      text: "Tasks",
      amount: "50%",
      icon: "fas fa-clipboard-list",
    },
    {
      color: "warning",
      text: "Pending Requests",
      amount: "18",
      icon: "fas fa-comments",
    },
  ];

  return (
    <div className="row">
      {data.map((item, index) => {
        return (
          <div key={index} className="col-xl-3 col-md-6 mb-4">
            <div className={`card border-left-${item.color} shadow h-100 py-2`}>
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div
                      className={`text-xs font-weight-bold text-${item.color} text-uppercase mb-1`}
                    >
                      {item.text}
                    </div>
                    <div className="d-flex align-items-center">
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {item.amount}
                    </div>
                    {item.text === "Tasks" && show ? (
                      <div className="progress progress-sm ml-2 flex-grow-1">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    ): null}
                  </div>
                  </div>
                  <div className="col-auto">
                    <i className={`fas ${item.icon} fa-2x text-gray-300`}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
