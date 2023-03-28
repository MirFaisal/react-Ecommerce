import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
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

  const handelAddToCart = (seletedProduct) => {
    let newCart = [];
    // if seletedProduct is not exists in cart. then the product quantity set 1
    const exists = cart.find((product) => product.id === seletedProduct.id);
    if (!exists) {
      seletedProduct.quantity = 1;
      newCart = [...cart, seletedProduct];
    } else {
      // if seletedproduct is exists in cart.than only clicked item quantity set to plus 1
      const rest = cart.filter((product) => product.id != seletedProduct.id);
      seletedProduct.quantity = seletedProduct.quantity + 1;
      newCart = [...rest, seletedProduct];
    }
    setCart(newCart);
    addToDb(seletedProduct.id);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    // console.log(storedCart);
    const processedCart = [];

    for (const id in storedCart) {
      const addedProducts = products.find((product) => product.id === id);
      // console.log(addedProducts);
      if (addedProducts) {
        const quantity = storedCart[id];
        addedProducts.quantity = quantity;
        processedCart.push(addedProducts);
      }
    }
    setCart(processedCart);
  }, [products]);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Products;
