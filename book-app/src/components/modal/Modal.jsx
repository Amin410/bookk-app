import React from "react";
import "./modal.css";
import Rating from "../book-slider/Rating";
import { Link } from "react-router-dom";

const Modal = ({ bookData, setOpenModal }) => {
  const { title, inStock, rating, author, price, id } = bookData;
  return (
    <div className="modal-container">
      dddd
      <div className="modal-content">
        <i
          onClick={() => setOpenModal(true)}
          className="bi bi-x-circle-fill modal-icon"
        ></i>
        <div className="modal-content-info-title">
          <b>Title: {title}</b>
        </div>
        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{title}</h5>
          <div className="modal-content-info-stock">
            <b>Status:</b> {inStock ? "in stock" : "not in stock"}
          </div>
          <Rating rating={rating} />
          <div className="modal-content-info-author">
            <b>Author: {author}</b>
          </div>
          <div className="modal-content-info-price">
            <b>Price : {price}</b>
          </div>
          <div className="modal-add-to-cart">
            <input
              type="number"
              min="1"
              max="100"
              className="modal-add-to-cart-input"
            />
            <button className="modal-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
          <Link to={`/book/${id}`} className="modal-content-info-link">
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
