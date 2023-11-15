import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/book-slider/Rating";

const Book = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === +id);

  console.log(book);
  return (
    <div className="book">
      <div className="book-content">
        <img
          src={`/book/${book.image}`}
          alt="{book.title}"
          className="book-content-img"
        />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating />
          <div className="book-add-to-cart">
            <input
              min="1"
              max="100"
              type="number"
              className="book-add-to-cart-input"
            />
            <button className="book-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
