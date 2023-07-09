import React, { useState } from "react";
import axios from "axios";
import { Alert, Box, Button, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { BACKEND_BASE_URL } from "../Constants/AppConstants";
import { validateEmail } from "../Components/Util/GlobalValidation";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [email, setEmail] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(username)) {
      setErrorMsg("Please enter a valid email");
      return;
    }

    try {
      const response = await axios.post(
        `${BACKEND_BASE_URL}/auth/authenticate`,
        {
          email: username,
          password: password,
        }
      );

      const accessToken = response.data.accessToken;
      sessionStorage.setItem("accessToken", accessToken);
      setIsLoggedIn(true);
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ marginTop: "16px", marginBottom: "16px" }}>
          <Link to="/">
            <picture>
              <img src="https://menu.am/images/logo.png" alt="Logo" />
            </picture>
          </Link>
        </Box>
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
        Sign In
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          paddingTop: "24px",
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
        {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
        <Box sx={{ marginBottom: "16px" }}>
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <InputLabel
              // root
              animated
              sx={{
                overflow: "hidden",
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
              value={username}
              sx={{
                fontSize: "14px",
                letterSpacing: "1px",
                border: "1px solid #cccccc",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
              }}
              // label="password"
              className="form1_4"
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
              // onChange={handlePasswordChange}
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

        <Box className="for1">
          <Link to="/forget-password">
            <Button>
              <span>Forgot Password?</span>
            </Button>
          </Link>
        </Box>

        <Box
          sx={{
            "@media (min-width: 768px)": {
              marginTop: "32px",
            },
            "@media (min-width: 0px)": {
              marginTop: "16px",
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
            onClick={handleSubmit}
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
            Sign In
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
      {/* {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
      <form onSubmit={handleSubmit} className="form1">
        <Box mt={2} mb={2} sx={{ flexWrap: "wrap", width: "100%" }}>
          <div>
            <div className="form1_2">
              <label>
                <span>Email address</span>
              </label>
            </div>
            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput
                placeholder="Enter your Email Address"
                required
                name="email"
                value={username}
                // label="password"
                className="form1_4"
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  borderRadius: "10px",
                  border: "1px solid #cccccc",

                  color: "#ffffff",
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  borderRadius: "10px",
                  border: "1px solid #cccccc",
                  color: "#ffffff",
                }}
                // id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                // label="Password"
              />
            </FormControl>
          </div>
        </Box>

        <Box className="for1">
          <Link to="/forget-password">
            <Button>
              <span>Forgot Password?</span>
            </Button>
          </Link>
        </Box>
        <div className="sign1">
          <button className="sign2" onClick={handleSubmit}>
            <span>Sign In</span>
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
      </form> */}
    </>
  );
};

const Login = () => (
  <>
    {/* start */}
    <div>
      <div>
        <Box
          container
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
                  Don't have an account yet?
                </Box>

                <Button
                  variant="outlined"
                  href="/sign-up"
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
                    Create Account
                  </Button>
                </Button>
              </Box>
              <Typography>&nbsp;</Typography>
              <LoginForm />
            </Box>
          </Box>
        </Box>
      </div>
    </div>

    {/* finish */}
    {/* <Box sx={{ display: "flex" }}>
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
          <Typography className="box3">Don't have an account yet?</Typography>
          <Link to="/sign-up">
            <Button className="button1">
              <span>Create Account</span>
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

          <Typography className="box3_1">Sign In</Typography>
          <Typography>&nbsp;</Typography>
          <LoginForm />
        </Box>
      </Box>
    </Box> */}
  </>
);

export default Login;
