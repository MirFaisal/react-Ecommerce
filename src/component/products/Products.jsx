import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-wrapper">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          />
        ))}
      </div>
      <div className="order-summary">
        <h2>Order ummary</h2>
        <div className="cart">
          <p>Selected Items: {cart.length}</p>
          <p>Total Price: {}</p>
          <p>Total Shipping Charge: {}</p>
          <p>Tax: {}</p>
          <h3>Grand Total: {}</h3>
        </div>
      </div>
    </div>
  );
};

export default Products;
