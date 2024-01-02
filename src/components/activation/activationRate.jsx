import React from "react";
import "./activationRate.css";
import { MdError } from "react-icons/md";
import { IoMdArrowUp } from "react-icons/io";

const ActivationRate = () => {
  return (
    <div className="activation">
      <div className="activation-top-content">
        <div className="activation-rate">
          <b>ACTIVATION RATE</b>
          <span>
            <MdError />
          </span>
        </div>
        <div className="activation-report">
          <p>All Reports</p>
        </div>
      </div>
      <div className="activation-top-content">
        <div className="percentage">
          <b style={{fontSize: '30px'}}>96%</b>
        </div>
        <div className="activation-grow-percent">
          <IoMdArrowUp />
          <span>2.13%</span>
        </div>
      </div>
      <div className="activation-top-content">
        <div className="activation-content">
          <div className="start">
            <b className="text">STARTED</b>
            <p>791</p>
          </div>
          <div className="complete">
            <b className="text">COMPLETED</b>
            <p>648</p>
          </div>
        </div>
        <div className="graph">graph</div>
      </div>
    </div>
  );
};

export default ActivationRate;
