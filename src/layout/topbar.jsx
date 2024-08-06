/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { useState } from "react";
// import React from 'react';
import User from "./../assets/images/user-grid/user.png";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link, useNavigate } from "react-router-dom";
import Notification from "./../assets/icon/notification.png";
import Mail from "./../assets/icon/mail.png";

const Topbar = ({ toggleActive, toggleMobileActive }) => {
  const name = localStorage.getItem("name");
  const Role = localStorage.getItem("role");
  const image = localStorage.getItem("image");
  const navigate = useNavigate();

  // handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div className="navbar-header">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <div className="d-flex flex-wrap align-items-center gap-4">
              {/* <button
                type="button"
                className="sidebar-toggle"
                onClick={toggleActive}
              >
                <MenuIcon className="icon text-2xl non-active" />
                <ArrowRightIcon className="icon text-2xl active" />
              </button> */}
              <button
                type="button"
                className="sidebar-mobile-toggle"
                onClick={toggleMobileActive}
              >
                {" "}
                <MenuIcon className="icon text-2xl non-active" />
              </button>
              <form className="navbar-search">
                <input type="text" name="search" placeholder="Search" />
                <SearchIcon className="icon" />
              </form>
            </div>
          </div>
          <div className="col-auto">
            <div className="d-flex flex-wrap align-items-center gap-3">
              <div className="dropdown">
                <button
                  className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src={Mail}
                    className="text-primary-light text-xl"
                    style={{ width: "60%" }}
                    alt=""
                  />

                  {/* <EmailIcon className="text-primary-light text-xl" /> */}
                </button>
              
              </div>

              <div className="dropdown">
                <button
                  className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src={Notification}
                    className="text-primary-light text-xl"
                    style={{ width: "70%" }}
                    alt=""
                  />
                  {/* <NotificationsIcon className="text-primary-light text-xl" /> */}
                </button>
              </div>
              {/* Notification dropdown end */}

              <div className="dropdown">
                <button
                  className="d-flex justify-content-center align-items-center rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src={User}
                    alt="image"
                    className="w-40-px h-40-px object-fit-cover rounded-circle"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
