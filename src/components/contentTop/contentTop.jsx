import React from "react";
import "./contentTop.css";

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
            </select>
          </div>
          <div className="box filter">
            <img src="" alt="" /> <span>Filters</span> <span>3</span>
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
