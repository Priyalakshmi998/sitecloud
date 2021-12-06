import React from "react";
import FullComponent from "./Modules/SideMenu/Menu";
import { Provider } from "react-redux";
import ForgotPassWord from "./Modules/Auth/ForgotPassWord/ForgotPassWord";
import Login from "./Modules/Auth/Login/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            <Route path="/managesite" element={<FullComponent />} />
          </Routes>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
