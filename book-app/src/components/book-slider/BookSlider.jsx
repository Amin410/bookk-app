import React, { useState } from "react";
import "./book-slider.css";
import Rating from "./Rating";
import Modal from "../modal/Modal";
const BookSlider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  // Handle Modal
  const handleModal = (book) => {
    setOpenModal(true);
    setBookData(book);
    console.log(book);
  };
  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  return (
    <div className="book-slider-container">
      {slideIndex >= 0 && (
        <i
          onClick={() => handleClick("left")}
          className="bi bi-chevron-left book-slider-arrow-left"
        ></i>
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <h2 className="book-slide-item-title">{item.title}</h2>
            <Rating rating={item.rating} />
            <h4 className="book-slide-item-price">{item.price}</h4>
            <h5 className="book-slide-item-author">{item.author}</h5>
            <div className="book-slider-icons-wrapper">
              <i
                onClick={() => handleModal(item)}
                className="bi bi-eye-fill"
              ></i>
              <i className="bi bi-cart-plus"></i>
            </div>
          </div>
        ))}
      </div>
      {slideIndex <= data.length - 1 && (
        <i
          onClick={() => handleClick("right")}
          className="bi bi-chevron-right book-slider-arrow-right"
        ></i>
      )}
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default BookSlider;
