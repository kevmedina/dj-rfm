import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <p>© 2020 – ALL RIGHTS RESERVED, RFM</p>
      <div className="icons">
        <span>
          <i class="fab fa-facebook"></i>
        </span>
        <span>
          <i class="fab fa-instagram"></i>
        </span>
        <span>
          <i class="fab fa-mixcloud"></i>
        </span>
        <span>
          <i class="fab fa-twitch"></i>
        </span>
      </div>
    </div>
  );
};

export default Footer;
