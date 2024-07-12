import React, { useEffect, useState } from 'react'
import Logo from "./../assets/images/logo.png";
import LogoIcon from "./../assets/images/logo-icon.png";
import { Link } from 'react-router-dom';



const sidebar = ({ isMobileActive }) => {
    const [mobileActive, setMobileActive] = useState(false);

    useEffect(() => {
        setMobileActive(isMobileActive);
    }, [isMobileActive]);


    //handle click functon 
    const handleClick = () => {
        setMobileActive(!mobileActive)
    }

    return (
        <div>
            <aside className={`sidebar  ${mobileActive ? 'sidebar-open' : ''}`}>
                <button type="button" class="sidebar-close-btn" onClick={handleClick}>
                    <iconify-icon icon="radix-icons:cross-2"></iconify-icon>
                </button>
                <div>
                    <a class="sidebar-logo">
                        <img src={Logo} alt="site logo" class="light-logo" />
                        <img src={Logo} alt="site logo" class="dark-logo" />
                        <img src={LogoIcon} alt="site logo" class="logo-icon" />
                    </a>
                </div>
                <div class="sidebar-menu-area open">
                    <ul class="sidebar-menu show" id="sidebar-menu">
                        <li>
                            <Link to="/newDashboardDesign">
                                <a>
                                    <iconify-icon icon="solar:home-smile-angle-outline" class="menu-icon"></iconify-icon>
                                    <span>New Dashboard</span>
                                </a></Link>
                        </li>

                        <li class="sidebar-menu-group-title">User</li>
                        <Link to="/table">
                            <li>
                                <a>
                                    <iconify-icon icon="flowbite:users-group-outline" class="menu-icon"></iconify-icon>
                                    <span>Users Table</span>
                                </a>
                            </li>
                        </Link>
                        <Link to="/grid">
                            <li>
                                <a>
                                    <iconify-icon icon="flowbite:users-group-outline" class="menu-icon"></iconify-icon>
                                    <span>Users Grid</span>
                                </a>
                            </li>
                        </Link>
                        <Link to="/formLayout">
                            <li>
                                <a>
                                    <iconify-icon icon="hugeicons:invoice-03" class="menu-icon"></iconify-icon>
                                    <span>Users forms</span>
                                </a>
                            </li>
                        </Link>
                        <Link to="/formValidations">
                            <li>
                                <a>
                                    <iconify-icon icon="material-symbols:map-outline" class="menu-icon"></iconify-icon>
                                    <span>Validation forms</span>
                                </a>
                            </li>
                        </Link>
                        <Link to="/calender">
                            <li>
                                <a>
                                    <iconify-icon icon="solar:calendar-outline" class="menu-icon"></iconify-icon>
                                    <span>Calender</span>
                                </a>
                            </li>
                        </Link>

                        {/* <li>
                            <a href="chat-message.html">
                                <iconify-icon icon="bi:chat-dots" class="menu-icon"></iconify-icon>
                                <span>Chat</span>
                            </a>
                        </li> */}
                        <li class="sidebar-menu-group-title">Authentication</li>

                        <Link to="/login">
                            <li>
                                <a>
                                    <iconify-icon icon="material-symbols:map-outline" class="menu-icon"></iconify-icon>
                                    <span>Login Page</span>
                                </a>
                            </li>
                        </Link>
                        <Link to="/register">
                            <li>
                                <a>
                                    <iconify-icon icon="solar:calendar-outline" class="menu-icon"></iconify-icon>
                                    <span>Register Page</span>
                                </a>
                            </li>
                        </Link>

                        <li class="sidebar-menu-group-title">Settings</li>
                        <Link to="/settings">
                            <li>
                                <a>
                                    <iconify-icon icon="material-symbols:map-outline" class="menu-icon"></iconify-icon>
                                    <span>General Settings</span>
                                </a>
                            </li>
                        </Link>





                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default sidebar