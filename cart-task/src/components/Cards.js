import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="" />
        </div>
        <div className="details">
            <p className='title'>{title}</p>
            <p className='price'> ₹ {price}</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards