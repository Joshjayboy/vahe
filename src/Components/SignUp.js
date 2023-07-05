import React, {useState} from "react";
import {Alert, Box, Button, Typography} from "@mui/material";
import {BACKEND_BASE_URL} from "../Constants/AppConstants";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {validateEmail} from "./Util/GlobalValidation";

function SignUp() {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                email, phoneNumber, password
            }
            const response = await axios.post(`${BACKEND_BASE_URL}/auth/register`, payload);
            console.log("User registered successfully");
            const accessToken = response.data.accessToken;
            sessionStorage.setItem("accessToken", accessToken);
            navigate("/");
        } catch (error) {
            console.log("Registration failed");
            setErrorMessage(error.response.data.message);
        }
    };

    return (<>
        <Box sx={{display: "flex"}}>
            <Box>
                <Box>
                    <picture>
                        <img
                            src="https://menu.am/images/sign-in-up.png"
                            alt="Login illustration"
                        />
                    </picture>
                </Box>
            </Box>
            <Box className="box1">
                <Box className="box2">
                    <Typography className="box3">Already have an Account?</Typography>
                    <Link to="/sign-up">
                        <Button className="button1">
                            <span>ASign in</span>
                        </Button>
                    </Link>
                </Box>
                <Box className="box2_1">
                    <Box className="box2_2">
                        <Link to="/">
                            <picture>
                                <img src="https://menu.am/images/logo.png" alt="Logo"/>
                            </picture>
                        </Link>
                    </Box>
                </Box>
                <Typography className="box3_1">Create Account</Typography>

                <Typography>&nbsp;</Typography>

                <form onSubmit={handleSubmit} className="form1">
                    {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

                    <div className="form1_1">
                        <div className="form1_2">
                            <label>
                                <span>Phone number</span>
                            </label>
                        </div>

                        <div className="form1_4_1">
                            <PhoneInput
                                style={{
                                    border: "1px solid #cccccc",
                                    borderRadius: "10px",
                                    backgroundColor: " #ffffff",
                                    outline: "none"
                                }}
                                placeholder="55 22 33"
                                required
                                name="phoneNumber"
                                label="phone"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e)}
                            />
                        </div>
                    </div>

                    <div className="form1_1">
                        <div className="form1_2">
                            <label>
                                <span>Email Address</span>
                            </label>
                        </div>

                        <div className="form1_4">
                            <input
                                placeholder="Enter your email address"
                                required
                                name="email"
                                label="email"
                                fullWidth
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    validateEmail(email)
                                }}
                                className="form1_5"
                            ></input>
                        </div>
                    </div>

                    <div className="form1_1">
                        <div className="form1_2">
                            <label>
                                <span>Password</span>
                            </label>
                        </div>

                        <div className="form1_4">
                            <input
                                placeholder="Enter your password"
                                required
                                name="password"
                                label="password"
                                type="password"
                                fullWidth
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                className="form1_5"
                            ></input>
                            <div>
                                <button className="input2">
                    <span className="input3">
                      <picture>
                        <img
                            alt="image"
                            src="https://menu.am/images/icons/eye-closed.png"
                        />
                      </picture>
                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="form1_1">
                        <div className="form1_2">
                            <label>
                                <span>Confirm Password</span>
                            </label>
                        </div>

                        <div className="form1_4">
                            <input
                                placeholder="Confirm your password"
                                required
                                name="confirmPassword"
                                label="confirmPassword"
                                type="password"
                                fullWidth
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                }}
                            ></input>
                            <div>
                                <button className="input2">
                    <span className="input3">
                      <picture>
                        <img
                            alt="image"
                            src="https://menu.am/images/icons/eye-closed.png"
                        />
                      </picture>
                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="sign1">
                        <button className="sign2">
                            <span>Create Account</span>
                        </button>
                    </div>

                    <div className="con1">
                        <div className="con2"></div>
                        <div className="con3">Continue with</div>
                        <div className="con4"></div>
                    </div>

                    <div>
              <span className="face1">
                <button className="face2">
                  <button className="face3">
                    <span className="face4">
                      <picture>
                        <img
                            alt="image"
                            src="https://menu.am/images/icons/facebook-icon.png"
                        />
                      </picture>
                      <div className="face5">Facebook</div>
                    </span>
                  </button>
                </button>
              </span>
                    </div>

                    <div className="goo1">
                        <button className="goo2">
                <span className="goo3">
                  <picture>
                    <img
                        alt="image"
                        src="	https://menu.am/images/icons/google-icon.png"
                    />
                  </picture>
                  <div className="face5">Google</div>
                </span>
                        </button>
                    </div>

                    <div className="tik1">
                        <label className="tik2">
                <span className="tik3">
                  <span className="tik4">
                    <input className="tik5" type="checkbox"></input>
                    <svg
                        class="tik6"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                      <path
                          d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                    </svg>
                  </span>
                </span>
                            <span className="tik7">
                  <div className="tik8">
                    By clicking to "Sign up" button you accept our
                    <a className="tik9" href="/">
                      <span> Terms & Conditions</span>
                    </a>
                  </div>
                </span>
                        </label>
                    </div>
                </form>
            </Box>
        </Box>
    </>);
}

export default SignUp;
