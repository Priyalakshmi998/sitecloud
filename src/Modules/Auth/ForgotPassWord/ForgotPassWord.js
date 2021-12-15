import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Row, Col, Input, Button } from "antd";
import useStateWithValidation from "../../Utils/useStateWithValidation";
import Logo from "../../../assets/image/png/Logo.png";
import "../../sass/style.css";

const ForgotPassWord = () => {

    let navigate = useNavigate();
    const [
        userEmailInput,
        setUserEmailInput,
        validEmail,
    ] = useStateWithValidation((email) => email.length > 3, "");

    const [checkValidation, setCheckValidation] = useState(false);

    const onChangeEmailInput = (e) => {
        setUserEmailInput(e.target.value);
    };

    const handleForgotPassWord = async (event) => {
        event.preventDefault();
        setCheckValidation(true);

        try {

            let getUserMailID = {
                email: userEmailInput,

            }
            console.log("getUserMailID", getUserMailID);


        } catch (error) {
            console.log("error", error);
        }
    };


    return (
        <React.Fragment>
            <Row>
                {/* img container starts */}
                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                    <div className="login_pg_img">

                    </div>
                </Col>
                {/* img container ends */}
                {/* Forgot password container starts */}
                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                    <section className="formInput_container">
                        <div className="login_page">
                            <div className="logo_img">
                                {/* Logo */}
                                <img src={Logo} alt="logo" />
                            </div>
                            <h1 className="pt-6 pb-9">Site Cloud</h1>
                            
                             <div className="login_form ">
                            <h3 className="forget_page_head">Forget Password</h3>

                                <form onSubmit={handleForgotPassWord}>
                                  
                                    {/* Email field starts */}
                                    <div className="input_container">


                                        <label className="form_label ">Enter your email address</label>
                                        <div className="pt-1">

                                        <Input
                                            placeholder="&nbsp;&nbsp;&nbsp;danielrich@gmail.com"
                                            name="userEmailInput"
                                            value={userEmailInput}

                                            className="login_input_text"
                                            onChange={onChangeEmailInput} /></div>
                                        {/* email validation */}
                                        {checkValidation === true && validEmail === false && (
                                            <>
                                                <span className="validation_error text-focus-in">*Email is required</span>
                                            </>
                                        )}

                                           

                                    </div>
                                    {/* email validation */}
                                    {checkValidation === true && validEmail === false && (
                                        <>
                                            <span className="validation_error text-focus-in">*Email is required</span>
                                        </>
                                    )}

                                    {/* Email field ends */}


                                    <div className="forgot_password">
                                        <Button type="link" onClick={() => { navigate("/login") }}>
                                            Back to Login
                                        </Button>
                                    </div>

                                    <div className="resend_btn">
                                        {/* Login btn  */}
                                        <button type="submit" onClick={() => { navigate("/managesite") }}>
                                            Send Password Reset Link
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </Col>
                {/*  Forgot password container ends */}
            </Row >
        </React.Fragment >
    )
}

export default ForgotPassWord;
