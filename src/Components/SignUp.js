import React, { useState } from "react";
import {
  Alert,
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  Input,
  withStyles,
} from "@mui/material";

// import PhoneInput from "react-phone-number-input";
import { BACKEND_BASE_URL } from "../Constants/AppConstants";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import ReactPhoneInput from "react-phone-input-material-ui";
// import { TextField, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  field: {
    margin: "10px 0",
  },
  countryList: {
    ...theme.typography.body1,
  },
});

function SignUp(props) {
  const { value, defaultCountry, onChange, classes } = props;
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const [number, setNumber] = useState();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_BASE_URL}/auth/register`,
        user
      );
      console.log("User registered successfully");
      const accessToken = response.data.accessToken;
      // Store accessToken in session storage
      sessionStorage.setItem("accessToken", accessToken);
      navigate("/");
    } catch (error) {
      console.log("Registration failed");
      setErrorMessage(error.response.data.message);
    }
  };

  const styles = (theme) => ({
    field: {
      margin: "10px 0",
    },
    countryList: {
      ...theme.typography.body1,
    },
  });

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
                  <img src="https://menu.am/images/logo.png" alt="Logo" />
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

              {/* <div className="form1_4"> */}
              <div className="form1_4_1">
                <PhoneInput
                  style={{
                    border: "1px solid #cccccc",
                    borderRadius: "10px",
                    backgroundColor: " #ffffff",
                    outline: "none",
                  }}
                  placeholder="55 22 33"
                  required
                  name="firstname"
                  label="First Name"
                  fullWidth
                  value={number}
                  onChange={setNumber}
                  // onChange={handleChange}
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
                  name="lastname"
                  label="Last Name"
                  fullWidth
                  onChange={handleChange}
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
                  name="lastname"
                  label="Last Name"
                  fullWidth
                  onChange={handleChange}
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
                  name="lastname"
                  label="Last Name"
                  fullWidth
                  onChange={handleChange}
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

            {/* new */}
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
            {/* end of new */}
          </form>
        </Box>
      </Box>

      {/* <form onSubmit={handleSubmit}>
        <Typography variant="h6">Sign Up</Typography>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              name="firstname"
              label="First Name"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              required
              name="lastname"
              label="Last Name"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              required
              name="email"
              label="Email"
              type="email"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              required
              name="password"
              label="Password"
              type="password"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form> */}
    </>
  );
}

export default SignUp;
