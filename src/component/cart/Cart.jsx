import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let totalItem = 0;
  let totalPrice = 0;
  let totalShipping = 0;
  for (const item of cart) {
    totalItem = totalItem + item.quantity;
    totalPrice = totalPrice + item.price * item.quantity;
    totalShipping = totalShipping + item.shipping * item.quantity;
  }
  let tax = totalPrice * 0.09;
  let grandTotal = tax + totalShipping + totalPrice;

  return (
    <div>
      <h2>Order Summary</h2>
      <div className="cart">
        <p>
          Selected Items: <span>{totalItem}</span>
        </p>
        <p>
          Total Price: <span>${totalPrice}</span>
        </p>
        <p>
          Total Shipping Charge: <span>${totalShipping}</span>
        </p>
        <p>
          Tax: <span>${tax.toFixed(2)}</span>
        </p>
        <h3>
          Grand Total: <span>${grandTotal.toFixed(2)}</span>
        </h3>
      </div>
    </div>
  );
};

export default Cart;
