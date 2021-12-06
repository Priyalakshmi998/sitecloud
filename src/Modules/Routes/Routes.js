import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Map from "../Maps/ManageSite"
import Navbar from '../Navbar/NavBar';
import FullComponent from "../SideMenu/Menu"
import ErrorPage from '../PageNotFound/ErrorPage';
import PrivateRoute from './PrivateRoute'

const PublicRoute = () => {
    return (

        <>
            <Navbar />


            {/* <Navbar /> */}
            <PrivateRoute path="/managesite" element={<Map />} />
        </>

    );
};

export default PublicRoute;