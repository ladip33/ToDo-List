import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ isLogoutBtn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className={`logout ${isLogoutBtn ? "active" : ""}`}>
      <span onClick={handleLogout}>Logout</span>
    </div>
  );
};

export default Logout;
