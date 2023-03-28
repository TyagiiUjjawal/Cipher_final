import React from "react";
import "./Navbar.css";
import img from "./images/ujjawal.jpg";

const Navbar = () => {
  const handleProfilePhotoChange = () => {
    // handle profile photo change logic
  };

  return (
    <nav>
      <div className="navbar-left">
        <img className="profile-photo" src={img} alt="Profile Photo" />
        <div className="profile-info">
          <h4>Ujjawal Tyagi</h4>
          <p>tyagiujjawal9@gmail.com</p>
          <button onClick={handleProfilePhotoChange}>💬💬</button>
        </div>
      </div>
      <div className="navbar-right">
        <h3>**.2K Followers</h3>
      </div>
    </nav>
  );
};

export default Navbar;
