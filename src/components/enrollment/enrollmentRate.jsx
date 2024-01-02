import React from "react";
import "./enrollmentRate.css";

import { MdError } from "react-icons/md";
import { IoMdArrowUp } from "react-icons/io";

const EnrollmentRate = () => {
  return (
    <div className="enrollment">
      <div className="enrollment-top-content">
        <div className="enrollment-rate">
          <b>ENROLLMENT RATE</b>
          <span>
            <MdError />
          </span>
        </div>
        <div className="enrollment-report">
          <p>All Reports</p>
        </div>
      </div>
      <div className="enrollment-top-content">
        <div className="percentage">
          <b style={{ fontSize: "30px" }}>83%</b>
        </div>
        <div className="enrollment-grow-percent">
          <IoMdArrowUp />
          <span>0.72%</span>
        </div>
      </div>
      <div className="enrollment-top-content">
        <div className="enrollment-content">
          <div className="assigned">
            <b className="assigned-text">ASSIGNED</b>
            <p>1341</p>
          </div>
          <div className="enrolled">
            <b className="enrolled-text">ENROLLED</b>
            <p>1262</p>
          </div>
        </div>
        <div className="enrollment-graph">graph</div>
      </div>
    </div>
  );
};

export default EnrollmentRate;
