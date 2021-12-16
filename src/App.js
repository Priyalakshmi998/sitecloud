import React from "react";
import Map from "./Modules/Maps/ManageSite";
import Live from "./Modules/Attendence/Live";
import DailyAttenance from "./Modules/Attendence/Daily";
import History from "./Modules/Attendence/History";
import Signin from "./Modules/Attendence/Signin";
import Home from "./Modules/Homepage/Home";
import { Provider } from "react-redux";
import ForgotPassWord from "./Modules/Auth/ForgotPassWord/ForgotPassWord";
import Login from "./Modules/Auth/Login/Login";
import ProtectedRoutes from "./Modules/Routes/ProtectedRoutes"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./Modules/PageNotFound/ErrorPage"
import store from "./Store/Store";
import "antd/dist/antd.css";
import "./Modules/sass/style.css";
import './App.css';
import Sitesetup from "./Modules/Homepage/Sitesetup";

const App = () => {

  return (
    <section class="full_components">
      <React.Fragment>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot_password" element={<ForgotPassWord />} />
              <Route path="/home" element={<Home />} />
              <Route path="/site_setup" element={<Sitesetup />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/managesite" element={<Map />} />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route path="/daily_attendence" element={<DailyAttenance />} />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route path="/live_attendence" element={<Live />} />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route path="/attendence_history" element={<History />} />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route path="/manual_signin" element={<Signin />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </Provider>
      </React.Fragment>
    </section>
  );
}

export default App;
