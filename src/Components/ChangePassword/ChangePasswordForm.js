import React, { useState } from "react";
import { Box, Button } from "@mui/material";
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

const ChangePasswordForm = ({
  onSubmit,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) => (
  <>
    <Box container sx={{ minHeight: "600px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingTop: "120px",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <Box sx={{ textAlign: "center", marginBottom: "56px" }}>
            <Box
              component="span"
              sx={{
                color: "rgb(0, 0, 0)",
                fontWeight: "700",
                paddingBottom: "24px",
                fontSize: "24px",
              }}
            >
              Reset Password
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "16px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "baseline",

              justifyContent: "center",
            }}
          >
            <form
              animated
              className="form1"
              marginRight="8px"
              marginBottom="8px"
              sx={{
                overflow: "hidden",
                fontSize: "14px",
              }}
            >
              <div className="form1_1">
                <div className="form1_2">
                  <label>
                    <span>New Password</span>
                  </label>
                </div>

                <div className="form1_4">
                  <input
                    variant="outlined"
                    fullWidth
                    placeholder="New Password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                  <div>
                    <button className="input2">
                      <span className="input3">
                        <picture>
                          <img
                            alt="img"
                            src="	https://menu.am/images/icons/eye-closed.png"
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
                    variant="outlined"
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  ></input>
                  <div>
                    <button className="input2">
                      <span className="input3">
                        <picture>
                          <img
                            alt="img"
                            src="	https://menu.am/images/icons/eye-closed.png"
                          />
                        </picture>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* <Box sx={{ flexWrap: "wrap", width: "100%" }}>
                <div>
                  <div className="form1_2">
                    <label>
                      <span>Password</span>
                    </label>
                  </div>
                  <FormControl sx={{ width: "100%" }}>
                    <OutlinedInput
                      outline="none"
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
                      // label="password"
                      className="form1_4"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                      sx={{
                        borderRadius: "10px",
                        border: "1px solid #cccccc",
                        outline: "none",
                        backgroundColor: " #ffffff",
                      }}
                      // id="outlined-adornment-password"
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
                      // label="Password"
                    />
                  </FormControl>
                </div>
              </Box> */}

              {/* <Box sx={{ flexWrap: "wrap", width: "100%" }}>
                  <div>
                    <div className="form1_2">
                      <label>
                        <span>Password</span>
                      </label>
                    </div>
                    <FormControl sx={{ width: "100%" }}>
                      <OutlinedInput
                        outline="none"
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        // label="Password"
                      />
                    </FormControl>
                  </div>
                </Box> */}
              {/* <Box mt={2} mb={4} sx={{ flexWrap: "wrap", width: "100%" }}>
                  <div>
                    <div className="form1_2">
                      <label>
                        <span>Confirm Password</span>
                      </label>
                    </div>
                    <FormControl sx={{ width: "100%" }}>
                      {/* <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel> */}
              {/* <OutlinedInput
                  outline="none"
                  placeholder="Confirm your password"
                  required
                  name="Confirm password"
                  // label="password"
                  className="form1_4"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  sx={{
                    borderRadius: "10px",
                    border: "1px solid #cccccc",
                    outline: "none",
                    backgroundColor: " #ffffff",
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
                  } */}

              {/* /> */}
              {/* </FormControl>
                  </div>
                </Box> */}
            </form>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              marginTop: "56px",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "30%" }}>
              <Button
                width="100%"
                type="submit"
                onClick={onSubmit}
                variant="contained"
                sx={{
                  padding: "10px 18px",
                  fontWeight: "bold",
                  lineHeight: "22px",
                  width: "100%",
                  borderRadius: "10px",

                  background:
                    "transparent linear-gradient(180deg, #c5022e 0%, #ea1f4d 100%) 0% 0% no-repeat",
                }}
              >
                Change Password
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </>
);

export default ChangePasswordForm;
