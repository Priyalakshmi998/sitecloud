import React, { useState } from 'react';
import { Row, Col, Input, Button } from "antd";
import { useNavigate } from 'react-router';
import useStateWithValidation from "../../Utils/useStateWithValidation";
import Logo from "../../../assets/image/png/Logo.png";
import "../../sass/style.css";

const Login = () => {
    let navigate = useNavigate();
    // const [
    //     userEmailInput,
    //     setUserEmailInput,
    //     validEmail,
    // ] = useStateWithValidation((email) => email.length > 5, "");

    const [
        userEmailInput,
        setUserEmailInput,
    ] = useState("");

    const [checkValidation, setCheckValidation] = useState(false);

    const [
        userpasswordInput,
        setUserPasswordInput,
        validPassword,
    ] = useStateWithValidation((password) => password.length >= 6, "");

    const [logininputs, setLoginInputs] = useState({});

    const [passwordRequired, setpasswordRequired] = useState(false);
    const [emailRequired, setEmailRequired] = useState(false);
    const [checkEmailVaidation, setCheckEmailVaildation] = useState(false);

    const onChangeEmailInput = (e) => {
        setUserEmailInput(e.target.value);
        setEmailRequired(false);
        setCheckEmailVaildation(false);
    };

    const onChangePasswordInput = (e) => {
        setUserPasswordInput(e.target.value);
        setpasswordRequired(false);
    };

    const validate = () => {
        if (userpasswordInput === "" || userpasswordInput === undefined) {
            setpasswordRequired(true);
        }
        if (userEmailInput === "" || userEmailInput === undefined) {
            setEmailRequired(true);
        }
        if (!userpasswordInput && !userEmailInput) {
            return false;
        }
        return true;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validate()) {
            setCheckValidation(true);
            setpasswordRequired(false);
            setEmailRequired(false);
            try {
                const checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (checkEmail.test(String(userEmailInput).toLowerCase()) === false) {
                    setCheckEmailVaildation(true);
                }

                else {
                    let credentials = {
                        email: userEmailInput,
                        password: userpasswordInput,
                    };
                    setLoginInputs(credentials);
                    console.log("login", credentials);
                    console.log("email check", checkEmail.test(String(userEmailInput).toLowerCase()));
                    console.log("password", validPassword.toString());
                    if (validPassword.toString() == "true") {
                        navigate("/home");
                    }
                }
            } catch (error) {
                console.log("error", error);
            }
        }
    };

    return (
        <React.Fragment>
            <section className="container_login">
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


                                            <label className="form_label ">Email Address</label>
                                            <div className="pt-1">
                                                <Input
                                                    placeholder="&nbsp;&nbsp;&nbsp;danielrich@gmail.com"
                                                    name="userEmailInput"
                                                    className="login_input_text"
                                                    value={userEmailInput}
                                                    onChange={onChangeEmailInput}
                                                /></div>
                                            {/* required mail validation */}
                                            {
                                                emailRequired && (
                                                    <>
                                                        <span className="validation_error text-focus-in">*Email ID is required</span>
                                                    </>
                                                )
                                            }

                                            {/* Correct mail ID validation */}
                                            {
                                                checkEmailVaidation && (
                                                    <>
                                                        <span className="validation_error text-focus-in">*Email is not valid</span>
                                                    </>
                                                )
                                            }
                                        </div>

                                        {/* Email field ends */}

                                        {/* Password field starts */}
                                        <div className="input_container">

                                            <label className="form_label ">Password</label>

                                            <div className="pt-2">
                                                <Input.Password
                                                    placeholder="&nbsp;&nbsp;&nbsp;* * * * * *"
                                                    name="userpasswordInput"
                                                    value={userpasswordInput}
                                                    onChange={onChangePasswordInput}
                                                />
                                            </div>
                                            {/* password validation */}
                                            {passwordRequired
                                                && (
                                                    <>
                                                        <span className="validation_error text-focus-in">*Password is required</span>
                                                    </>
                                                )}

                                            {/* passord length validation */}
                                            {
                                                checkValidation === true && validPassword === false && (
                                                    <>
                                                        <span className="validation_error text-focus-in">*Password must have minimum 6 characters</span>
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
                                            <button type="submit" className="login_button_text" >
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
            </section>
        </React.Fragment>
    )
}

export default Login;

