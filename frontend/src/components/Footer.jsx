import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Contact Info */}
        <div className="banner">
          <div className="left">TestHub</div>
          <div className="right">
            <p>123/A Gulshan, Dhaka, Bangladesh</p>
            <p>Open: 10:00 AM - 10:00 PM</p>
          </div>
        </div>

        {/* Credits */}
        <div className="banner">
          <div className="left">
            <p>Developed By Bosrin</p>
          </div>
          <div className="right">
            <p>All Rights Reserved © TestHub</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
