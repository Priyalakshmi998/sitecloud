import React from "react";
import Map from "./Modules/Maps/ManageSite";
import { Provider } from "react-redux";
import ForgotPassWord from "./Modules/Auth/ForgotPassWord/ForgotPassWord";
import Login from "./Modules/Auth/Login/Login";
import ProtectedRoutes from "./Modules/Routes/ProtectedRoutes"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./Modules/PageNotFound/ErrorPage"
import store from "./Store/Store";
import "antd/dist/antd.css";
import './App.css';

const App = () => {

  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot_password" element={<ForgotPassWord />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/managesite" element={<Map />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
