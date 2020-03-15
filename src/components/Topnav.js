import React from 'react';
import "./Topnav.css"



const Navbar = ({ children }) => (
  <div>
    <div className="Navbar">
      <div className="Navbar__title">
        React to my page!
      </div>

      {children}
    </div>
  </div>
)

export default Navbar;
