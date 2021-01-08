import React from "react";
import "./sidebar.css";
import logo from "../../data/icons/logo.png";
import menuIcon from "../../data/icons/dashboardMenuIcon.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img height="60px" width="60px" src={logo}></img>
      </div>
      <div className="menuIconBackground">
        <div className="menuIcon">
          <img heigh="40px" width="40px" src={menuIcon}></img>
        </div>
        <div className="arrowForward">
          <ArrowForwardIosIcon
            style={{
              color: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
