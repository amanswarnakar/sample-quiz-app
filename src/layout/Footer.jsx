import React from "react";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer">&copy; Aman Swarnakar {Year}</div>
    </div>
  );
};

export default Footer;
