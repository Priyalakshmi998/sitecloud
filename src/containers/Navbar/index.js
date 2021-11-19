import React, { useState, useEffect } from "react";
// import {ReactComponent as Logo1} from "../../assets/Logo1.png";
import Logo1 from "../../assets/Logo1.png";
import "../../styles/navbar.scss";
// import logo from './logo.svg';
// import { Menu, Dropdown, Avatar, message } from "antd";
// import { Link } from "react-router-dom";
// import { MenuOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
return (
    <div className="header">
    <div className="logo-nav">
    <div className="logo-container">
    <a href="#">
        <img className="logo" src={Logo1} alt="" />
    </a>
    <h1 id="title-text">Site Management System</h1>
    </div>
</div>
</div>
);
};

export default  Navbar;