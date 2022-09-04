import React, { useState, useEffect } from "react";
import "../styles/cart.css";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      <div><h3>You have ordered:</h3></div>
      {cart.map((item) => (
        <><div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <div className="cart-middle">
              <p>{item.title}</p><br></br>
              <pre>{item.description}</pre><br></br>
              <p>Price: RS.{item.price}</p>
            </div>
          </div>
            
          <div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div></>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;
