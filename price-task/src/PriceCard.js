function PriceCard({ plan, price, features }) {
    return (
      <div className="price-card">
        <h2>{plan}</h2>
        <p className="price">{price}/month</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button>Choose Plan</button>
      </div>
    );
  }

  export default PriceCard;