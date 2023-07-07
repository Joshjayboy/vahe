import React, { useState } from "react";
import { Alert, Box, Button, Typography } from "@mui/material";
import { BACKEND_BASE_URL } from "../Constants/AppConstants";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { validateEmail } from "./Util/GlobalValidation";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function SignUp() {
  const [isError, setIsError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showPasswordd, setShowPasswordd] = React.useState(false);

  const handleClickShowPasswordd = () => setShowPasswordd((show) => !show);

  // const validatePassword = () => {
  //   return password === confirmPassword;
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        email,
        phoneNumber,
        password,
      };
      const response = await axios.post(
        `${BACKEND_BASE_URL}/auth/register`,
        payload
      );
      console.log("User registered successfully");
      const accessToken = response.data.accessToken;
      sessionStorage.setItem("accessToken", accessToken);
      navigate("/");
    } catch (error) {
      console.log("Registration failed");
      setErrorMessage(error.response.data.message);
    }
  };

  const isSubmitDisabled = password !== confirmPassword;
  const checkValidation = (e) => {
    const confPass = e.target.value;
    setConfirmPassword(confPass);
    if (password != confPass) {
      setIsError("Password and confirm password should be same");
    } else {
      setIsError("");
    }
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
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
            <Link to="/login">
              <Button className="button1">
                <span>Sign in</span>
              </Button>
            </Link>
          </Box>
          <Box className="box2_1">
            <Box className="box2_2">
              <Link to="/">
                <picture>
                  <img src="https://menu.am/images/logo.png" alt="Logo" />
                </picture>
              </Link>
            </Box>
          </Box>
          <Typography className="box3_1">Create Account</Typography>

          <Typography>&nbsp;</Typography>

          <form onSubmit={handleSubmit} className="form1">
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

            <Box mt={2} mb={2} sx={{ flexWrap: "wrap", width: "100%" }}>
              <div>
                <div className="form1_2">
                  <label>
                    <span>Phone</span>
                  </label>
                </div>
                <FormControl sx={{ width: "100%" }}>
                  <PhoneInput
                    placeholder="55 22 33 44"
                    required
                    style={{
                      border: "1px solid #cccccc",
                      borderRadius: "10px",
                      backgroundColor: " #ffffff",
                      outline: "none",
                    }}
                    // placeholder="55 22 33"
                    // required
                    // name="phoneNumber"
                    // label="phone"
                    // fullWidth
                    value={phoneNumber}
                    // onChange={handleOnChange}
                    onChange={(e) => setPhoneNumber(e)}
                  />
                </FormControl>
              </div>
            </Box>

            <Box mt={2} mb={2} sx={{ flexWrap: "wrap", width: "100%" }}>
              <div>
                <div className="form1_2">
                  <label>
                    <span>Email </span>
                  </label>
                </div>
                <FormControl sx={{ width: "100%" }}>
                  <OutlinedInput
                    outline="none"
                    placeholder="Enter your Email Address"
                    required
                    name="email"
                    // label="password"
                    className="form1_4"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(email);
                    }}
                    sx={{
                      borderRadius: "10px",
                      border: "1px solid #cccccc",
                      outline: "none",
                      backgroundColor: "#ffffff",
                    }}
                    // id="outlined-adornment-password"
                    type="email"
                  />
                </FormControl>
              </div>
            </Box>

            <Box sx={{ flexWrap: "wrap", width: "100%" }}>
              <div>
                <div className="form1_2">
                  <label>
                    <span>Password</span>
                  </label>
                </div>
                <FormControl sx={{ width: "100%" }}>
                  <OutlinedInput
                    placeholder="Enter your password"
                    required
                    name="password"
                    // label="password"
                    className="form1_4"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    sx={{
                      borderRadius: "10px",
                      border: "1px solid #cccccc",
                      outline: "none",
                      backgroundColor: "#ffffff",
                    }}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
            </Box>

            <Box mt={2} mb={4} sx={{ flexWrap: "wrap", width: "100%" }}>
              <div>
                <div className="form1_2">
                  <label>
                    <span>Confirm Password</span>
                  </label>
                </div>
                <FormControl sx={{ width: "100%" }}>
                  <OutlinedInput
                    outline="none"
                    placeholder="Confirm your password"
                    required
                    name="Confirm password"
                    className="form1_4"
                    onChange={(e) => checkValidation(e)}
                    // onChange={(e) => {
                    //   setConfirmPassword(e.target.value);
                    // }}
                    sx={{
                      borderRadius: "10px",
                      border: "1px solid #cccccc",
                      outline: "none",
                      backgroundColor: " #ffffff",
                    }}
                    type={showPasswordd ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPasswordd}
                          edge="end"
                        >
                          {showPasswordd ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {isError}
                  {/* {validatePassword() ? (
                    <p>Passwords match</p>
                  ) : (
                    <p>Passwords do not match</p>
                  )} */}
                </FormControl>
              </div>
            </Box>

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
                      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
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
    </>
  );
}

export default SignUp;
