import React from "react";
import "./completionRate.css";

import { MdError } from "react-icons/md";
import { IoMdArrowDown } from "react-icons/io";

const CompletionRate = () => {
  return (
    <div className="completion">
      <div className="completion-top-content">
        <div className="completion-rate">
          <b>COMPLETION RATE</b>
          <span>
            <MdError />
          </span>
        </div>
        <div className="completion-report">
          <p>All Reports</p>
        </div>
      </div>
      <div className="completion-top-content">
        <div className="percentage">
          <b style={{ fontSize: "30px" }}>64%</b>
        </div>
        <div className="completion-grow-percent">
          <IoMdArrowDown />
          <span>1.85%</span>
        </div>
      </div>
      <div className="completion-top-content">
        <div className="completion-content">
          <div className="invite">
            <b className="invite-text">INVITED</b>
            <p>1262</p>
          </div>
          <div className="activate">
            <b className="activate-text">ACTIVATED</b>
            <p>1091</p>
          </div>
        </div>
        <div className="completion-graph">graph</div>
      </div>
    </div>
  );
};

export default CompletionRate;
