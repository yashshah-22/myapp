import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>V</span>ote
            <span>N</span>ation
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/chunavpathshala">PAATHSHAALA</NavLink>
            </li>
            <li>
              <NavLink to="/contentcreation">FEED</NavLink>
            </li>
            <li>
              <NavLink to="/competition">CONTESTS</NavLink>
            </li>
            <li>
              <NavLink to="/referralsystem">REFERRALS</NavLink>
            </li>
            
          </ul>
        </div>
        <div className="profile">
        <li className="dropdown" onClick={toggleDropdown}>
          <a href="#">Profile</a>
          {dropdownVisible && (
            <div className={`dropdown-menu ${dropdownVisible ? 'show' : ''}`}>
            <Link to="/feedbackform"><a href="#">Feedback</a></Link>
            <Link to="/votingstatus"><a href="#">Voting Status</a></Link>
              <Link to="/coupons"><a href="#">Coupons</a></Link>
              <Link to="/votingcalendar"><a href="#">Voting Calendar</a></Link>
            </div>
          )}
        </li>
        </div>
        </nav></>
        
  );
};

export default Navbar;