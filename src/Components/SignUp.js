import React, { useState } from "react";
import { Alert, Box, Button, Typography } from "@mui/material";
import { BACKEND_BASE_URL } from "../Constants/AppConstants";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { validateEmail } from "./Util/GlobalValidation";

import Container from "@mui/material/Container";
import { Hidden } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FormLabel from "@mui/material/FormLabel";
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

  const [passwordMatchError, setPasswordMatchError] = useState("");
  // const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatchError(false); // Reset the error state when password changes
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatchError(false); // Reset the error state when confirm password changes
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showPasswordd, setShowPasswordd] = React.useState(false);

  const handleClickShowPasswordd = () => setShowPasswordd((show) => !show);

  const isSmallScreen = window.innerWidth <= 600;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

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
      <div>
        <Box
          sx={{
            minHeight: "600px",
          }}
        >
          <Box sx={{ display: "flex", backgroundColor: "rgb(252 252 253)" }}>
            <Box sx={{ width: "50%" }} className="disimage">
              <picture>
                <img
                  src="https://menu.am/images/sign-in-up.png"
                  alt="Login illustration"
                />
              </picture>
            </Box>
            <Box
              sx={{
                "@media (min-width: 0px)": {
                  width: "80%",
                  margin: "96px auto auto",
                },

                "@media (min-width: 768px)": {
                  width: "70%",
                  margin: "96px auto auto",
                },
                "@media (min-width: 992px)": {
                  width: "70%",
                  marginTop: "0px",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  paddingTop: "32px",
                  paddingRight: "80px",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    color: "black",
                    display: "flex",
                    fontSize: "14px",
                    alignItems: "center",
                    fontWeight: "500",
                    marginRight: "16px",
                  }}
                >
                  Already have an Account?
                </Box>

                <Button
                  variant="outlined"
                  href="/login"
                  disableElevation
                  sx={{
                    padding: "1px 1px",
                    fontWeight: "bold",
                    lineHeight: "22px",
                    textTransform: "inherit",
                  }}
                  className="button1"
                >
                  <Button
                    label
                    component="span"
                    sx={{
                      width: "100%",
                      display: "inherit",

                      alignItems: "inherit",
                      justifyContent: "center",
                    }}
                  >
                    Sign In
                  </Button>
                </Button>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {/* <Box sx={{ marginTop: "16px", marginBottom: "16px" }}>
                  <Link to="/">
                    <picture>
                      <img src="https://menu.am/images/logo.png" alt="Logo" />
                    </picture>
                  </Link>
                </Box> */}
              </Box>
              <Box
                component="span"
                sx={{
                  color: "black",
                  fontWeight: "700",
                  paddingBottom: "24px",
                  "@media (min-width: 0px)": {
                    fontSize: "24px",
                  },
                  "@media (min-width: 768px)": {
                    fontSize: "24px",
                  },
                  "@media (min-width: 992px)": {
                    fontSize: "24px",
                  },
                  "@media (min-width: 1200px)": {
                    fontSize: "34px",
                  },
                }}
              >
                Create Account
              </Box>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  paddingTop: "24px",
                  width: "80%",

                  "@media (min-width: 0px)": {
                    width: "80%",
                  },
                  "@media (min-width: 768px)": {
                    width: "80%",
                  },
                  "@media (min-width: 992px)": {
                    width: "80%",
                  },
                  "@media (min-width: 1200px)": {
                    width: "55%",
                  },
                }}
              >
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
                        international
                        placeholder="55 22 33 44"
                        countryCallingCodeEditable={false}
                        defaultCountry="AM"
                        // className="form1_4"
                        required
                        style={{
                          borderRadius: "10px",
                          border: "1px solid #cccccc",
                          borderRadius: "10px",
                          backgroundColor: " #ffffff",
                        }}
                        value={phoneNumber}
                        // onChange={handleOnChange}
                        onChange={(e) => setPhoneNumber(e)}
                      />
                    </FormControl>
                  </div>
                </Box>

                <Box sx={{ marginBottom: "16px" }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <InputLabel
                      root
                      animated
                      sx={{
                        overflow: "hidden",
                        fontSize: "14px",
                        marginRight: "8px",
                        marginBottom: "8px",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Typography
                        component="span"
                        root
                        caption
                        noWrap
                        sx={{
                          fontSize: "0.75rem",
                          whiteSpace: "nowrap",
                          fontWeight: "400",
                          lineHeight: "1.66",
                          color: "#363636",
                        }}
                      >
                        Email Address
                      </Typography>
                    </InputLabel>
                  </Box>

                  <FormControl
                    sx={{
                      width: "100%",
                    }}
                  >
                    <OutlinedInput
                      outline="none"
                      placeholder="Enter your Email Address"
                      required
                      name="email"
                      sx={{
                        fontSize: "14px",
                        letterSpacing: "1px",
                        border: "1px solid #cccccc",
                        borderRadius: "10px",
                        backgroundColor: "#ffffff",
                      }}
                      // label="password"
                      className="form1_4"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(email);
                      }}
                      id="outlined-adornment-password"
                      type="email"
                    />
                  </FormControl>
                </Box>

                <Box sx={{ marginBottom: "16px" }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <InputLabel
                      root
                      animated
                      sx={{
                        overflow: "hidden",
                        fontSize: "14px",
                        marginRight: "8px",
                        marginBottom: "8px",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Typography
                        component="span"
                        root
                        caption
                        noWrap
                        sx={{
                          fontSize: "0.75rem",
                          whiteSpace: "nowrap",
                          fontWeight: "400",
                          lineHeight: "1.66",
                          color: "#363636",
                        }}
                      >
                        Password
                      </Typography>
                    </InputLabel>
                  </Box>

                  <FormControl
                    sx={{
                      width: "100%",
                    }}
                  >
                    <OutlinedInput
                      placeholder="Enter your password"
                      required
                      name="password"
                      // label="password"
                      className="form1_4"
                      // onChange={(e) => {
                      //   setPassword(e.target.value);
                      // }}
                      onChange={handlePasswordChange}
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
                </Box>

                <Box sx={{ marginBottom: "8px" }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <InputLabel
                      root
                      animated
                      sx={{
                        overflow: "hidden",
                        fontSize: "14px",
                        marginRight: "8px",
                        marginBottom: "8px",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Typography
                        component="span"
                        root
                        caption
                        noWrap
                        sx={{
                          fontSize: "0.75rem",
                          whiteSpace: "nowrap",
                          fontWeight: "400",
                          lineHeight: "1.66",
                          color: "#363636",
                        }}
                      >
                        Confirm Password
                      </Typography>
                    </InputLabel>
                  </Box>

                  <FormControl
                    sx={{
                      width: "100%",
                    }}
                  >
                    <OutlinedInput
                      outline="none"
                      placeholder="Confirm your password"
                      required
                      name="Confirm password"
                      className="form1_4"
                      onChange={handleConfirmPasswordChange}
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

                    {passwordMatchError && (
                      <Alert severity="error">
                        {passwordMatchError}Passwords do not match
                      </Alert>
                    )}
                  </FormControl>
                </Box>

                <Box
                  sx={{
                    "@media (min-width: 0px)": {
                      marginTop: "16px",
                    },
                    "@media (min-width: 768px)": {
                      marginTop: "32px",
                    },
                  }}
                >
                  <Button
                    root
                    contained
                    containedPrimary
                    disableElevation
                    fullWidth
                    type="submit"
                    sx={{
                      background:
                        "transparent linear-gradient(180deg, #c5022e 0%, #ea1f4d 100%) 0% 0% no-repeat",
                      padding: "10px 18px",
                      lineHeight: "22px",
                      textTransform: "inherit",
                      fontWeight: "bold",
                      color: "#fff",
                      borderRadius: "10px",
                    }}
                  >
                    Create Account
                  </Button>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    marginTop: "32px",
                    marginBottom: "32px",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35%",
                      margin: "auto",
                      borderBottom: "1px solid rgb(182 182 182)",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      color: "rgb(182 182 182)",
                      marginLeft: "16px",
                      marginRight: "16px",
                    }}
                  >
                    Continue With
                  </Box>
                  <Box
                    sx={{
                      width: "35%",
                      margin: "auto",
                      borderBottom: "1px solid rgb(182 182 182)",
                    }}
                  ></Box>
                </Box>

                <Box>
                  <span style={{ transition: "opacity 0.5s ease 0s" }}>
                    <button
                      type="button"
                      style={{
                        width: "100%",
                        border: "transparent",
                        padding: 0,
                        background: "transparent",
                      }}
                    >
                      <Button
                        contained
                        colorInherit
                        disableElevation
                        fullWidth
                        sx={{
                          color: "#FFFFFF",
                          width: "100%",
                          border: "1px solid #3B5999",
                          fontWeight: "bold",
                          paddingTop: "2px",
                          borderRadius: "20px",
                          paddingBottom: "2px",
                          backgroundColor: "#3B5999",
                        }}
                      >
                        <Button component="span" label>
                          <picture>
                            <img
                              alt="img"
                              src="https://menu.am/images/icons/facebook-icon.png"
                            />
                          </picture>
                          <Box
                            sx={{
                              marginLeft: "8px",
                              color: "#FFFFFF",
                              fontWeight: "bold",
                              lineHeight: "22px",
                              textTransform: "lowercase",
                            }}
                          >
                            Facebook
                          </Box>
                        </Button>
                      </Button>
                    </button>
                  </span>
                </Box>

                <Box sx={{ marginTop: "24px" }}>
                  <Button
                    fullWidth
                    disableElevation
                    colorInherit
                    type="button"
                    sx={{
                      color: "#000000",
                      border: "1px solid #CFCFD0",
                      borderRadius: "20px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <Button component="span" label>
                      <picture>
                        <img
                          alt="img"
                          src="	https://menu.am/images/icons/google-icon.png"
                        />
                      </picture>
                      <Box
                        sx={{
                          marginLeft: "8px",
                          textTransform: "inherit",
                          color: "#000000",
                          fontWeight: "bold",
                          lineHeight: "22px",
                        }}
                      >
                        Google
                      </Box>
                    </Button>
                  </Button>
                </Box>

                <Box sx={{ display: "flex", marginTop: "32px" }}>
                  <FormControlLabel required control={<Checkbox />} />
                  <Typography component="span">
                    By clicking to "Sign Up" button you accept our &nbsp;
                    <a style={{ color: "#C70430" }}>Terms & Conditions</a>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default SignUp;
