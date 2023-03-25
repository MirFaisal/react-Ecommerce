import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-wrapper">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="order-summary">
        <h2>Order ummary</h2>
      </div>
    </div>
  );
};

export default Products;
