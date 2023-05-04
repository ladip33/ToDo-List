import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Header = () => {
  const [isLogoutBtn, setIsLogoutBtn] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="header">
      <div className="container">
        <Link to="">TO DO</Link>
        <div className="user">
          <p>{user.name}</p>
          <div
            className="user-img"
            onClick={() => setIsLogoutBtn(!isLogoutBtn)}
          >
            <img src={user.image} alt="" />
          </div>
          <Logout isLogoutBtn={isLogoutBtn} />
        </div>
      </div>
    </header>
  );
};

export default Header;
