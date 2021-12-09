// import Logo from "../../assets/image/png/Logo.png";
// // import "./Navbar.css";
// import Button from '@mui/material/Button';

// const Navbar = () => {

//     return (
//         <header className="header">
//             <div className="logo-nav">
//                 <div className="logo-container">
//                     {/* Logo img */}
//                     <img className="logo" src={Logo} alt="Logo" />

//                     <h1 id="title-text">Site Cloud</h1>

//                     <div className="content_end">
//                         Account Setting
//                     </div>
//                     <Button variant="text">Text</Button>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Navbar;
import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../../assets/image/png/Logo.png";
import { UserOutlined } from '@ant-design/icons';
// import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <header className="nav_bar">

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>

                        <img className="header_logo" src={Logo} alt="Logo" />

                        {/* </IconButton> */}
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Site Cloud
                        </Typography>

                        <Button variant="text" onClick={handleOpenUserMenu}>Account Setting
                            <span className="user_setting"> <UserOutlined /></span>
                        </Button>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                    {/* <span className="user_setting">

                                <UserOutlined />
                            </span> */}
                    {/* </Button> */}
                </AppBar>
            </Box >
        </header >
    );
}

export default Navbar;



