import React, { useState } from "react";
import "./sidebar.css";
import { MdKeyboardDoubleArrowLeft, MdKeyboardArrowUp } from "react-icons/md";
import { RxGrid } from "react-icons/rx";
import { navigationLinks, yourAcademy } from "../../data/data";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div style={{ width: isOpen ? "220px" : "80px" }} className="sidebar">
        <div className="top-left">
          <div className="left">
            <div className="logo">WD</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="plan-name"
            >
              <span className="logo-1">ENTERPRISE PLAN</span>
              <p className="logo-2">Academy Hub</p>
            </div>
          </div>
          <div
            // style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="right"
          >
            <MdKeyboardDoubleArrowLeft onClick={toggle} />
          </div>
        </div>
        <div className="sidebar1">
          <div className="item dashboard">
            <div className="icon">
              <RxGrid />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text "
            >
              Dashboard
            </div>
          </div>
          {navigationLinks.map((item, id) => {
            return (
              <div className="item" key={id} activeclassName="active">
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.title}
                </div>
              </div>
            );
          })}
          <div className="">
            <p
              className="academy"
              style={{ display: isOpen ? "block" : "none" }}
            >
              YOUR ACADEMY
            </p>
            {yourAcademy.map((items, id) => {
              return (
                <div className="item" key={id} activeclassName="active">
                  <div className="icon your-icon">{items.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {items.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="footer-left">
            <img
              src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2022/06/06_Cena_09142009rf_031--8a1d8885e9ee285288d46da8ae7e86ae.jpg"
              alt=""
            />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="plan-name"
          >
            <span className="logo-1">LOGGED AS</span>
            <p className="logo-2">John Cena</p>
          </div>
          <div className="right">
            <MdKeyboardArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
