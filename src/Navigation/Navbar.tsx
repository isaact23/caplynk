
import React from 'react';

function Navbar() {
  return (
    <div className="w3-container w3-bar w3-black">
      <div className="w3-bar-item">
        <img src={"icons/capybara_white.svg"} alt="logo" className="w3-image" style={{maxWidth: "100px"}} />
      </div>
      <div className="w3-bar-item">
        <h1 style={{color: "white"}}>caplynk</h1>
      </div>
    </div>
  );
}

export default Navbar;
