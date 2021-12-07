import React from "react";
import Logo from "../../assets/image/png/Logo.png";
import "./Navbar.css";

const Navbar = () => {
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);
    return (
        <header className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    {/* Logo img */}
                    <img className="logo" src={Logo} alt="Logo" />

                    <h1 id="title-text">Site Management System</h1>
                </div>
            </div>
        </header>
    );
};

export default Navbar;