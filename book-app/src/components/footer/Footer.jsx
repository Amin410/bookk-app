import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-text">
          Follow us on social media
        </div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i style={{ color: `red` }} className="bi bi-instagram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: `#2980b9` }} className="bi bi-facebook"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: `red` }} className="bi bi-youtube"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: `skyblue` }} className="bi bi-twitter"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: `darkblue` }} className="bi bi-telegram"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">Authors</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
            <li className="footer-link">Register</li>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title"></h3>
          <div className="footer-adress-wrapper">
            <div className="footer-adress-item">
              <i className="bi bi-geo-alt-fill">Algiers, Algeria.</i>
            </div>
            <div className="footer-adress-wrapper">
              <div className="footer-adress-item">
                <i className="bi bi-telephone-fill">123-456-7890</i>
              </div>
              <div className="footer-adress-wrapper">
                <div className="footer-adress-item">
                  <i className="bi bi-envelope-fill">sadeg.amine5@gmail.com</i>
                </div>
              </div>
            </div>
            <div className="footer-links-item">
              <h3 className="footer-links-item-title">ABout Us</h3>
              <p className="footer-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident maiores laboriosam a libero? Deleniti atque expedita
                commodi, enim vero autem consequatur, pariatur quia iste
                similique iure nemo, non quam sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
