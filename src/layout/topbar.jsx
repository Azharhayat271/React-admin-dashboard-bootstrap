import { useState } from "react";
import React from 'react';
import User from "./../assets/images/user-grid/user.png";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from "react-router-dom";

const Topbar = ({ toggleActive, toggleMobileActive }) => {
    const name = localStorage.getItem('name');
    const Role = localStorage.getItem('role');
    const image = localStorage.getItem('image');
    const navigate = useNavigate();

// handle logout
const handleLogout = () => {
    localStorage.removeItem('token'); // Adjust the key name if needed
    navigate('/');
 
};
    return (
        <div>
            <div className="navbar-header">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="d-flex flex-wrap align-items-center gap-4">
                            <button type="button" className="sidebar-toggle" onClick={toggleActive}>
                                <MenuIcon className="icon text-2xl non-active" />
                                <ArrowRightIcon className="icon text-2xl active" />
                            </button>
                            <button
                                type="button"
                                className="sidebar-mobile-toggle"
                                onClick={toggleMobileActive}
                            />
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
                                    type="button" data-bs-toggle="dropdown">
                                    <EmailIcon className="text-primary-light text-xl" />
                                </button>
                                <div className="dropdown-menu to-top dropdown-menu-lg p-0">
                                    <div
                                        className="m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                                        <div>
                                            <h6 className="text-lg text-primary-light fw-semibold mb-0">Message</h6>
                                        </div>
                                        <span
                                            className="text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center">05</span>
                                    </div>

                                    <div className="max-h-400-px overflow-y-auto scroll-sm pe-4">
                                        <a href="javascript:void(0)"
                                            className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between">
                                            <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                                                <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                                                    <img src="assets/images/notification/profile-3.png" alt="" />
                                                    <span
                                                        className="w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0"></span>
                                                </span>
                                                <div>
                                                    <h6 className="text-md fw-semibold mb-4">Kathryn Murphy</h6>
                                                    <p className="mb-0 text-sm text-secondary-light text-w-100-px">hey! there i’m...</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column align-items-end">
                                                <span className="text-sm text-secondary-light flex-shrink-0">12:30 PM</span>
                                                <span
                                                    className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle">8</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="text-center py-12 px-16">
                                        <a href="javascript:void(0)" className="text-primary-600 fw-semibold text-md">See All Message</a>
                                    </div>
                                </div>
                            </div>
                            {/* Message dropdown end */}

                            <div className="dropdown">
                                <button
                                    className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                                    type="button" data-bs-toggle="dropdown">
                                    <NotificationsIcon className="text-primary-light text-xl" />
                                </button>
                                <div className="dropdown-menu to-top dropdown-menu-lg p-0">
                                    <div
                                        className="m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                                        <div>
                                            <h6 className="text-lg text-primary-light fw-semibold mb-0">Notifications</h6>
                                        </div>
                                        <span
                                            className="text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center">05</span>
                                    </div>

                                    <div className="max-h-400-px overflow-y-auto scroll-sm pe-4">
                                        <a href="javascript:void(0)"
                                            className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between">
                                            <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                                                <span
                                                    className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                                                    <VerifiedUserIcon className="icon text-xxl" />
                                                </span>
                                                <div>
                                                    <h6 className="text-md fw-semibold mb-4">Congratulations</h6>
                                                    <p className="mb-0 text-sm text-secondary-light text-w-200-px">Your profile has been Verified. Your
                                                        profile has been Verified</p>
                                                </div>
                                            </div>
                                            <span className="text-sm text-secondary-light flex-shrink-0">23 Mins ago</span>
                                        </a>
                                    </div>

                                    <div className="text-center py-12 px-16">
                                        <a href="javascript:void(0)" className="text-primary-600 fw-semibold text-md">See All Notification</a>
                                    </div>

                                </div>
                            </div>
                            {/* Notification dropdown end */}

                            <div className="dropdown">
                                <button className="d-flex justify-content-center align-items-center rounded-circle" type="button"
                                    data-bs-toggle="dropdown">
                                    <img src={User} alt="image" className="w-40-px h-40-px object-fit-cover rounded-circle" />
                                </button>
                                <div className="dropdown-menu to-top dropdown-menu-sm">
                                    <div
                                        className="py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                                        <div>
                                            <h6 className="text-lg text-primary-light fw-semibold mb-2">{name}</h6>
                                            <span className="text-secondary-light fw-medium text-sm">{Role}</span>
                                        </div>
                                        <button type="button" className="hover-text-danger">
                                            <CloseIcon className="icon text-xl" />
                                        </button>
                                    </div>
                                    <ul className="to-top-list">
                                        <li>
                                            <a className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                                                href="view-profile.html">
                                                <PersonIcon className="icon text-xl" /> My Profile</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                                                href="email.html">
                                                <MessageIcon className="icon text-xl" /> Inbox</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                                                href="company.html">
                                                <SettingsIcon className="icon text-xl" /> Setting</a>
                                        </li>
                                        <li>
                                            <a onClick={handleLogout} className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-danger d-flex align-items-center gap-3"
                                                >
                                                <PowerSettingsNewIcon className="icon text-xl" /> Log Out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
