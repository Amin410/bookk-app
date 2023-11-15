import React from "react";
import { cartInfo } from "../../data/cart";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-title">Your shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartInfo.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={`/book/${item.image}`}
                alt="{item.title}"
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <div className="cart-item-book-title">
                  <b>Title: </b> {item.title}
                </div>
                <div className="cart-item-author">
                  <b>Author:</b> {item.author}
                </div>
              </div>
              <div className="cart-item-quantity">
                <button>
                  <i className="bi bi-plus-lg"></i>
                </button>
                <button>
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cart;
