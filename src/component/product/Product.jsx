import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, price, ratings, seller, img } = props.product;
  return (
    <div className="card">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name.slice(0, 30)}..</h3>
        <p className="product-price">Price: $ {price}</p>
      </div>
      <div className="brand-and-quality">
        <p className="manufacturer">Manufacturer : {seller}</p>
        <p className="rating">Rating : {ratings}</p>
      </div>
      <button className="btn-primary">Add to Cart</button>
    </div>
  );
};

export default Product;
