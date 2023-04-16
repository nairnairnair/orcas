import React, { useState } from "react";

const Header = () => {
  return (
    <div className="App-header">
      <div className="header-logo">
        <img className="logo" src="orca.svg" alt="orca" />
        <a href="/">
          <h2>O.R.C.A</h2>
        </a>
      </div>
    </div>
  );
};

export default Header;
