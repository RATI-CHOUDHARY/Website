import React from 'react';
import './Style/Cards.css'
const Cards = ({item, handle}) => {
    const {Category,Name, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{Category}</p>
            <p>{Name}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handle(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards