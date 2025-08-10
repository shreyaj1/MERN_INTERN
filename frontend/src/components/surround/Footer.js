import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      <strong> &copy;  </strong>
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/devikakanyal"
        aria-label="My GitHub"
      >
        Devika & Shreya
      </a>
    </footer>
  );
};

export default Footer;
