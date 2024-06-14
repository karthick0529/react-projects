import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="container App">
      <CardsValue />
    </div>
  );
}

function CardsValue() {
  const cards_detail = [
    {
      title: "FREE",
      pack: "$0/month",
      data: [
        "✔ Single User",
        "✔ 50GB Storage",
        "✔ Unlimited Public Projects",
        "✔ Community Access",
      ],
      data1: [
        "✘ Unlimited Private Projects",
        "✘ Dedicated Phone Support",
        "✘ Free Subdomain",
        "✘ Monthly Status Reports",
      ],
    },
    {
      title: "PLUS",
      pack: "$9/month",
      data: [
        "✔ 5 Users",
        "✔ 50GB Storage",
        "✔ Unlimited Public Projects",
        "✔ Community Access",
        "✔ Unlimited Private Projects",
        "✔ Dedicated Phone Support",
        "✔ Free Subdomain",
      ],
      data1: ["✘ Monthly Status Reports"],
    },
    {
      title: "PRO",
      pack: "$49/month",
      data: [
        "✔ Unlimited Users",
        "✔ 50GB Storage",
        "✔ Unlimited Public Projects",
        "✔ Community Access",
        "✔ Unlimited Private Projects",
        "✔ Dedicated Phone Support",
        "✔ Free Subdomain",
        "✔ Monthly Status Reports",
      ],
      data1: [],
    },
  ];

  return (
    <div className="row">
      {cards_detail.map((ele, index) => {
        const card_style = {
          backgroundColor: "#fff",
          color: "black",
          margin: "15px 5px",
          borderRadius: "10px",
          width: "100%",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
        };
        const buttons = {
          width: "100%",
          borderRadius: "25px",
          backgroundColor: "#0072ff",
          color: "white",
          padding: "10px",
          marginTop: "20px",
          border: "none",
          cursor: "pointer"
        };
        return (
          <div className='col-md-4' key={index}>
            <div className="card" style={card_style}>
              <div className="card-body">
                <small className="text-muted">{ele.title}</small>
                <h4 className="card-title">{ele.pack}</h4>
                <CardInnerPart arr={ele.data} arr1={ele.data1} />
                <button className="btn" style={buttons}>Button</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CardInnerPart({ arr, arr1 }) {
  const para_style = {
    display: "flex",
    justifyContent: "start",
    color: "black",
    fontSize: "14px",
    margin: "5px 0"
  };
  const para_style1 = {
    display: "flex",
    justifyContent: "start",
    color: "gray",
    fontSize: "14px",
    margin: "5px 0"
  };
  return (
    <div className='Para_class'>
      {arr.map((res, index) => {
        return (
          <p key={index} style={para_style}>{res}</p>
        )
      }
      )}
      {arr1.map((ele1, index) => {
        return (
          <p key={index} style={para_style1}>{ele1}</p>
        )
      }
      )}
    </div>
  );
}
