import React from "react";
import "./peopleLeaderBoard.css";
import { studentData } from "../../data/data";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const PeopleLeaderBoard = () => {
  return (
    <div className="leader-board">
      <div className="top-board">
        <b>PEOPLE LEADERBOARD</b>
        <p>All People</p>
      </div>
      <div className="board-heading">
        <p>NAME</p>
        <p>IN PROGRESS</p>
        <p>COMPLETE</p>
      </div>
      <div className="data">
        {studentData.map((item, id) => {
          return (
            <div className="student-data">
              <p>{item.name}</p>
              <p>{item.progress}</p>
              <p>{item.complete}</p>
            </div>
          );
        })}
      </div>
      <div className="all-student-data">
        <div className="student-num">
          <p>1-5 of 1237 items</p>
        </div>
        <div className="next-btn">
          <span className="left-btn">
            <RiArrowLeftSLine />
          </span>
          <span className="right-btn">
            <RiArrowRightSLine />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PeopleLeaderBoard;
