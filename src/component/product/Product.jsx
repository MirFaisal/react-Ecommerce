import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ handelAddToCart, product }) => {
  /*
  another method to apply props
  const { handelAddToCart, product }=props;
  */
  const { name, price, ratings, seller, img } = product;

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
      <button onClick={() => handelAddToCart(product)} className="btn-primary">
        <p> Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
