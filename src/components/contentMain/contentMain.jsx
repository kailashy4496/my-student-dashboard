import React from "react";
import "./contentMain.css";
import ActivationRate from "../activation/activationRate";
import CompletionRate from "../completion/completionRate";
import EnrollmentRate from "../enrollment/enrollmentRate";
import PeopleLeaderBoard from "../../components/peopleBoard/peopleLeaderBoard";

const ContentMain = () => {
  return (
    <div className="main">
      <div className="main-content">
        <div className="main-box box-1">
          <ActivationRate />
        </div>
        <div className="main-box box-2">
          <CompletionRate/>
        </div>
        <div className="main-box box-3">
          <EnrollmentRate/>
        </div>
        <div className="main-box box-4"></div>
        <div className="main-box-right box-5">
          <PeopleLeaderBoard/>
        </div>
        <div className="main-box box-6"></div>
      </div>
    </div>
  );
};

export default ContentMain;
