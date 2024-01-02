import React from "react";
import "./contentMain.css";
import ActivationRate from "../activation/activationRate";
import CompletionRate from "../completion/completionRate";
import EnrollmentRate from "../enrollment/enrollmentRate";

const ContentMain = () => {
  return (
    <div className="main">
      <div className="main-content">
        <div className="main-box box-1">
          <ActivationRate />
        </div>
        <div className="main-box box-2">
          <CompletionRate />
        </div>
        <div className="main-box box-3">
          <EnrollmentRate />
        </div>
        <div className="main-box box-4"></div>
        <div className="main-box box-5"></div>
        <div className="main-box box-6"></div>
      </div>
    </div>
  );
};

export default ContentMain;
