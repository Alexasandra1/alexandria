import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import logotip from "../../image/cornflower.png";
import { LeftPanel } from "../LeftPanel/LeftPanel";

import './Header.scss'

export function Header() {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes("main")) {
      setActiveButton("history");
    } else if (currentPath.includes("festival")) {
      setActiveButton("festival");
    } else if (currentPath.includes("museum")) {
      setActiveButton("museum");
    } else {
      setActiveButton("");
    }
  }, [location]);

  const handleBurgerClick = () => {
    setPanelOpen(!isPanelOpen);
  };

  const handleCloseClick = () => {
    setPanelOpen(false);
  };

  return (
    <div className="header_container">
      <header className="header">
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <div className="header__text">Архив музея Александрии</div>
        </div>


        <div className="burger" onClick={handleBurgerClick} style={{ cursor: "pointer" }}>
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
            <g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11066)"> <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#5A7CF1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /> </g> <defs> <clipPath id="clip0_429_11066"> <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)" /> </clipPath> </defs> </g>
          </svg>
        </div>
        {isPanelOpen && (
          <div className={`panel ${isPanelOpen ? 'open' : ''}`}>
            <div className="close" onClick={handleCloseClick}>
              <div className="line line1"></div>
              <div className="line line2"></div>
            </div>
            <LeftPanel activeButton={activeButton} />
          </div>
        )}

      </header>
    </div>
  )
}