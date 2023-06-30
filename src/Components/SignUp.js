import React, { useState } from "react";
import {
  Alert,
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  Input,
} from "@mui/material";
import { BACKEND_BASE_URL } from "../Constants/AppConstants";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

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

          <form onSubmit={handleSubmit}>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

            <div className="form1_1">
              <div className="form1_2">
                <label className="form1_3">
                  <span>Phone number</span>
                </label>
              </div>

              <div className="form1_4">
                <Input
                  required
                  name="firstname"
                  label="First Name"
                  fullWidth
                  onChange={handleChange}
                ></Input>
                <div className="input1">
                  <Button className="input2">
                    <span className="input3">
                      <svg
                        id="Component_41_1"
                        data-name="Component 41 – 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="39"
                        height="39"
                        viewBox="0 0 39 38"
                      >
                        <rect
                          id="green-bg"
                          width="39"
                          height="39"
                          rx="9"
                          fill="#03bc66"
                        ></rect>
                        <g
                          id="Group_7922"
                          data-name="Group 7922"
                          transform="translate(-332 -237.548)"
                        >
                          <line
                            id="Line_117"
                            data-name="Line 117"
                            x1="2.113"
                            y2="2.113"
                            transform="translate(341 255.415)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-width="1"
                          ></line>
                          <line
                            id="Line_118"
                            data-name="Line 118"
                            x1="2.113"
                            y1="2.113"
                            transform="translate(341 257.528)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-width="1"
                          ></line>
                          <g
                            id="Group_1052"
                            data-name="Group 1052"
                            transform="translate(350.037 248.548)"
                          >
                            <g id="Group_1048" data-name="Group 1048">
                              <g id="Group_1047" data-name="Group 1047">
                                <path
                                  id="Path_801"
                                  data-name="Path 801"
                                  d="M554.079,827.16H546.75a1.978,1.978,0,0,1-1.977-1.976V812.567a1.978,1.978,0,0,1,1.977-1.976h7.329a1.978,1.978,0,0,1,1.976,1.976v12.617A1.977,1.977,0,0,1,554.079,827.16Zm-7.329-15.508a.916.916,0,0,0-.916.915v12.617a.917.917,0,0,0,.916.916h7.329a.916.916,0,0,0,.915-.916V812.567a.915.915,0,0,0-.915-.915Z"
                                  transform="translate(-544.773 -810.591)"
                                  fill="#fff"
                                ></path>
                              </g>
                            </g>
                            <g
                              id="Group_1051"
                              data-name="Group 1051"
                              transform="translate(1.597 2.339)"
                            >
                              <g id="Group_1049" data-name="Group 1049">
                                <path
                                  id="Path_802"
                                  data-name="Path 802"
                                  d="M553.845,813.866h-7.029a.53.53,0,0,1,0-1.061h7.029a.53.53,0,0,1,0,1.061Z"
                                  transform="translate(-546.285 -812.805)"
                                  fill="#fff"
                                ></path>
                              </g>
                              <g
                                id="Group_1050"
                                data-name="Group 1050"
                                transform="translate(0 10.831)"
                              >
                                <path
                                  id="Path_803"
                                  data-name="Path 803"
                                  d="M553.845,824.117h-7.029a.53.53,0,0,1,0-1.061h7.029a.53.53,0,0,1,0,1.061Z"
                                  transform="translate(-546.285 -823.056)"
                                  fill="#fff"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="form1_1">
              <div className="form1_2">
                <label className="form1_3">
                  <span>Email Address</span>
                </label>
              </div>

              <div className="form1_4">
                <Input
                  required
                  name="lastname"
                  label="Last Name"
                  fullWidth
                  onChange={handleChange}
                  className="form1_5"
                ></Input>
                <div className="input1">
                  <Button className="input2">
                    <span className="input3">
                      <picture>
                        <img
                          alt="image"
                          src="https://menu.am/images/icons/eye-closed.png"
                        />
                      </picture>
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="form1_1">
              <div className="form1_2">
                <label className="form1_3">
                  <span>Password</span>
                </label>
              </div>

              <div className="form1_4">
                <Input
                  required
                  name="lastname"
                  label="Last Name"
                  fullWidth
                  onChange={handleChange}
                  className="form1_5"
                ></Input>
                <div className="input1">
                  <Button className="input2">
                    <span className="input3">
                      <picture>
                        <img
                          alt="image"
                          src="https://menu.am/images/icons/eye-closed.png"
                        />
                      </picture>
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="form1_1">
              <div className="form1_2">
                <label className="form1_3">
                  <span>Confirm Password</span>
                </label>
              </div>

              <div className="form1_4">
                <Input
                  required
                  name="lastname"
                  label="Last Name"
                  fullWidth
                  onChange={handleChange}
                  className="form1_5"
                ></Input>
                <div className="input1">
                  <Button className="input2">
                    <span className="input3">
                      <picture>
                        <img
                          alt="image"
                          src="https://menu.am/images/icons/eye-closed.png"
                        />
                      </picture>
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/* new */}
            <div className="sign1">
              <button className="sign2">
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
            {/* end of new */}
          </form>
        </Box>
      </Box>

      {/* <Box className="box2_1">
        <Box className="box2_2">
          <Link to="/">
            <picture>
              <img src="https://menu.am/images/logo.png" alt="Logo" />
            </picture>
          </Link>
        </Box>
      </Box> */}

      <form onSubmit={handleSubmit}>
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
      </form>
    </>
  );
}

export default SignUp;
