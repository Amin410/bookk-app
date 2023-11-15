import React from "react";

export const HeaderTop = ({ setToggle, toggle }) => {
  return (
    <div className="header-top">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="header-top-menu"
      >
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
      <div className="header-top-phone">
        <i class="bi bi-telephone"></i>
        123-456-7890
      </div>
      <div className="header-top-text">
        Bienvenue sur ce catalogue de Livres
      </div>
      <div className="header-top-link">
        <i className="bi bi-person-fill"></i>
        Login
      </div>
    </div>
  );
};
