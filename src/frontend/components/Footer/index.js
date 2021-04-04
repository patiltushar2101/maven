import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span className="header-logo">
            <img src="https://i.ibb.co/zZ7TNQX/Maven.png" alt="pic" />
          </span>
        </h3>

        <p className="footer-links">
          <a href="/" className="link-1">
            Home
          </a>

          <a href="/AboutUs">About</a>

          <a href="/Login">Login</a>

          <a href="/ContactUs">Contact</a>
        </p>

        <p className="footer-company-name">Maven Corp © 2021</p>
      </div>

      <div className="footer-center">
        <div>
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        <div>
          <br />
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <a href="#facebook" className="footer-logo">
            <img src="https://i.ibb.co/ZxC8NCp/Facebook.png" alt="pic" />
          </a>
          <a href="#instagram" className="footer-logo">
            <img src="https://i.ibb.co/4VXznmP/Instagram.png" alt="pic" />
          </a>
          <a href="#linkedin" className="footer-logo">
            <img src="https://i.ibb.co/tzsnHYJ/LinkedIn.png" alt="pic" />
          </a>
          <a href="#twitter" className="footer-logo">
            <img src="https://i.ibb.co/nb69Q63/Twitter.png" alt="pic" />
          </a>
        </div>
      </div>
    </footer>
  );
}
