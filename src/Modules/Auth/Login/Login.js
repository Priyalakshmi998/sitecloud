import React, { useState } from 'react';
import { Row, Col, Input, Button } from "antd";
import { useNavigate } from 'react-router';
import useStateWithValidation from "../../Utils/useStateWithValidation";
import Logo from "../../../assets/image/png/Logo.png";
import { login } from "../../../Actions/Auth"
import { connect } from "react-redux";
import "../../sass/style.css";

const Login = ({ login, isAuthenticated }) => {
    let navigate = useNavigate();
    const [
        userEmailInput,
        setUserEmailInput,
        validEmail,
    ] = useStateWithValidation((email) => email.length > 3, "");

    const [checkValidation, setCheckValidation] = useState(false);

    const [
        userpasswordInput,
        setUserPasswordInput,
        validPassword,
    ] = useStateWithValidation((password) => password.length > 1, "");

    const [logininputs, setLoginInputs] = useState({});

    const onChangeEmailInput = (e) => {
        setUserEmailInput(e.target.value);
    };

    const onChangePasswordInput = (e) => {
        setUserPasswordInput(e.target.value);
    };




    const handleSubmit = async (event) => {
        event.preventDefault();
        setCheckValidation(true);

        try {
            let credentials = await login({
                email: userEmailInput,
                password: userpasswordInput,
            });
            console.log("login", login.state);

            // if (credentials) {
            //     navigate("/managesite");
            // }
        } catch (error) {
            console.log("error", error);
        }
    };
    console.log("isAuthenticated", isAuthenticated);

    return (
        <React.Fragment>
            <Row>
                {/* img container starts */}
                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                    <div className="login_pg_img">

                    </div>
                </Col>
                {/* img container ends */}
                {/* Login container starts */}
                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                    <section className="formInput_container">
                        <div className="login_page">
                            <div className="logo_img">
                                {/* Logo */}
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className="pt-6" >
                            <h1 >Site Cloud</h1></div>
                            <div className="login_form">
                                <h2>Login</h2>
                                <form onSubmit={handleSubmit}>
                                    {/* Email field starts */}
                                    <div className="input_container">
<<<<<<< HEAD

                                        <label className="form_label ">Email Address</label>
                                        <div className="pt-1">
                                        <Input
                                            placeholder="&nbsp;&nbsp;&nbsp;danielrich@gmail.com"
                                            name="userEmailInput"
                                            className="login_input_text"
                                            value={userEmailInput}
                                            onChange={onChangeEmailInput} 
                                            /></div>
=======
                                        <label className="form_label login_text">Email Address</label>
                                        <div className="pt-1">
                                            <Input
                                                placeholder="&nbsp;&nbsp;&nbsp;danielrich@gmail.com"
                                                name="userEmailInput"
                                                value={userEmailInput}
                                                onChange={onChangeEmailInput} />

                                        </div>
>>>>>>> 829b713c3b2acba4c13f713cced7b535a6e6b062
                                        {/* email validation */}
                                        {checkValidation === true && validEmail === false && (
                                            <>
                                                <span className="validation_error text-focus-in">*Email is required</span>
                                            </>
                                        )}
                                    </div>

                                    {/* Email field ends */}

                                    {/* Password field starts */}
                                    <div className="input_container">
<<<<<<< HEAD
                                        <label className="form_label ">Password</label>
=======
                                        <label className="form_label">Password</label>
                                        <label className="form_label login_text">Password</label>
>>>>>>> 829b713c3b2acba4c13f713cced7b535a6e6b062
                                        <div className="pt-2">
                                            <Input.Password
                                                placeholder="&nbsp;&nbsp;&nbsp;* * * * * *"
                                                name="userpasswordInput"
                                                value={userpasswordInput}
                                                onChange={onChangePasswordInput}
                                            />
                                        </div>
                                        {/* password validation */}
                                        {checkValidation === true && validPassword === false && (
                                            <>
                                                <span className="validation_error text-focus-in">*Password is required</span>
                                            </>
                                        )}

                                    </div>
                                    {/* Password field ends */}

                                    <div className="forgot_password">
                                        <Button type="link" onClick={() => { navigate("/forgot_password") }} >
                                            Forgot Password?
                                        </Button>
                                    </div>

                                    <div className="login_btn">
                                        <button type="submit" onClick={() => { navigate("/home") }}  className="login_button_text" >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </Col>
                {/* Login container ends */}
            </Row>
        </React.Fragment>
    )
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.Auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
