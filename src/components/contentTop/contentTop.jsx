import React from "react";
import "./contentTop.css";
import { BsFilterSquare } from "react-icons/bs";

const ContentTop = () => {
  return (
    <>
      <div className="top-content">
        <div className="content-top-left">
          <h3 className="content-top-title">Dashboard</h3>
        </div>
        <div className="right-content">
          <div className="box option">
            <select>
              <option value="last month">Last Month</option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>
          <div className="box filter">
            <div className="filter-icon">
              <BsFilterSquare />
            </div>
            <div className="filter-name">
              <p>Filters</p>
            </div>
            <div className="filter-num">
              <p>3</p>
            </div>
          </div>
          <div className="box edit">
            <p>Edit Widgets</p>
          </div>
        </div>
      </div>
      <div className="bottom-border"></div>
    </>
  );
};

export default ContentTop;
