import React from "react";
import "./scss/productcard.scss"

const ProductCard = ({sendItem}) => {
  return (
    <div>
      <div className="img-box">
        <img src={sendItem.image} alt={sendItem.title} />
      </div>
      <div className="text-box">
        <h3>{sendItem.title}</h3>
        <div>
          <strong>{sendItem.price}</strong>
          <span>20%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
