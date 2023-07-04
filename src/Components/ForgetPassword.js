// Form components
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { BACKEND_BASE_URL } from "../Constants/AppConstants";
import {
  Alert,
  Button,
  Container,
  MenuItem,
  TextField,
  Box,
  Input,
  InputBase,
  Typography,
} from "@mui/material";

import { ReactCodeInput } from "react-code-input";
// import { Typography } from "@mui/material";

const SendOTPForm = ({
  onSubmit,
  email,
  setEmail,
  verificationType,
  setVerificationType,
}) => (
  <form onSubmit={onSubmit}>
    <div className="reset">
      <div>
        <div>
          <div>
            <span>Reset Password</span>
          </div>
        </div>
      </div>
    </div>

    <div className="form1">
      <div className="form1_1">
        <div className="form1_2">
          <label>
            <span>Email address or mobile number</span>
          </label>
        </div>

        <div className="form1_4">
          <input
            label="Email is here"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
      </div>
    </div>

    <div className="form1">
      <div className="form1_1">
        <div className="form1_2">
          <label>
            <span>Email address or mobile number</span>
          </label>
        </div>
        <div className="form1_4">
          <TextField
            select
            // label="Verification Type"
            // variant="outlined"
            fullWidth
            value={verificationType}
            onChange={(e) => setVerificationType(e.target.value)}
            required
          >
            <MenuItem value="">Select Verification Type</MenuItem>
            <MenuItem value="SMS">SMS</MenuItem>
            <MenuItem value="EMAIL">Email</MenuItem>
          </TextField>
        </div>
      </div>
      <div className="sign1">
        <button className="sign2" type="submit" variant="contained">
          <span>Send verification code</span>
        </button>
      </div>

      <Box className="box2">
        <Typography className="box3">Don't have an account yet?</Typography>
        <Link to="/sign-up">
          <Button className="button1">
            <span>Create Account</span>
          </Button>
        </Link>
      </Box>
    </div>

    {/* <TextField
      label="Email is here"
      type="email"
      variant="outlined"
      fullWidth
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <TextField
      select
      label="Verification Type"
      variant="outlined"
      fullWidth
      value={verificationType}
      onChange={(e) => setVerificationType(e.target.value)}
      required
    >
      <MenuItem value="">Select Verification Type</MenuItem>
      <MenuItem value="SMS">SMS</MenuItem>
      <MenuItem value="EMAIL">Email</MenuItem>
    </TextField> */}
    {/* <Button type="submit" variant="contained">
      Send OTP
    </Button> */}
  </form>
);

const VerifyOTPForm = ({ onSubmit, otpCode, setOtpCode }) => (
  <>
    <Box container sx={{ minHeight: "600px", marginTop: "100px" }}>
      <Box
        sx={{ display: "flex", marginBottom: "32px", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            component="span"
            sx={{
              color: "black",
              fontWeight: "700",
              paddingBottom: "24px",
              fontSize: "34px",
            }}
          >
            Verify your phone number
          </Box>
          <Box>The message with verification code will be sent to number</Box>

          <Box
            sx={{
              fontSize: "20px",
              marginTop: "32px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            jakintemi@gmail.com
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "32px",
              justifyContent: "center",
            }}
          >
            <form onSubmit={onSubmit}>
              <TextField
                label="OTP"
                type="text"
                variant="outlined"
                fullWidth
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                required
              />
              {/* <Button type="submit" variant="contained">
                Verify OTP
              </Button> */}
            </form>
          </Box>
          <Box
            sx={{
              cursor: "pointer",
              color: "rgb(3, 188, 102)",
              marginTop: "32px",
            }}
          >
            Resend verification code
          </Box>
          <Box sx={{ width: "100%", marginTop: "32px" }}>
            <Button
              type="submit"
              variant="contained"
              onClick={onSubmit}
              sx={{
                padding: "10px 18px",
                width: "100%",
                fontWeight: "bold",
                lineHeight: "22px",
                textTransform: "inherit",
                boxShadow: "none",
                borderRadius: "10px",
                background:
                  "transparent linear-gradient(180deg, #c5022e 0%, #ea1f4d 100%) 0% 0% no-repeat",
              }}
            >
              <span
                sx={{
                  width: "100%",
                  display: "inherit",
                  alignItems: "inherit",
                  justifyContent: "inherit",
                }}
              >
                Verify OTP
              </span>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </>
);

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
              {/* <div className="form1_1"> */}
              <div className="form1_1">
                <div className="form1_2">
                  {/* <div className="form1_2"> */}
                  <label>
                    <span>New Password</span>
                  </label>
                </div>

                {/* <div className="form1_4"> */}
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
                  {/* <InputBase
                    sx={{
                      width: "100%",
                      border: "1px solid #cccccc",
                      borderRadius: "10px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <Input
                      sx={{
                        fontSize: "14px",
                        letterSpacing: "1px",
                        padding: "12.5px",
                      }}
                    />
                  </InputBase> */}
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

          {/* <form onSubmit={onSubmit}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained">
              Change Password
            </Button>
          </form> */}
          {/* <InputBase
            sx={{
              width: "100%",
              border: "1px solid #cccccc",
              borderRadius: "10px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Input
              sx={{ fontSize: "14px", letterSpacing: "1px", padding: "12.5px" }}
            />
          </InputBase> */}
        </Box>
      </Box>
    </Box>
    {/* <form onSubmit={onSubmit}>
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        fullWidth
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">
        Change Password
      </Button>
    </form> */}
  </>
);

// Form components
// ...
// (No changes here)

// Main component
const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [verificationType, setVerificationType] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [passwordResetToken, setPasswordResetToken] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpCorrect, setOtpCorrect] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendOtp = async (e) => {
    e.preventDefault();
    const payload = { email, verificationType };
    try {
      await axios.post(
        `${BACKEND_BASE_URL}/auth/send-change-password-otp`,
        payload
      );
      setOtpSent(true);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    const payload = { email, verificationType, otpCode };
    try {
      const { data } = await axios.post(
        `${BACKEND_BASE_URL}/auth/verify-change-password`,
        payload
      );
      setPasswordResetToken(data.details.passwordResetToken);
      setOtpCorrect(true);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();
    const payload = { password, confirmPassword, passwordResetToken, email };
    try {
      await axios.put(`${BACKEND_BASE_URL}/auth/change-password`, payload);
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      <Container>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        {!otpCorrect && !otpSent && (
          <SendOTPForm
            onSubmit={sendOtp}
            email={email}
            setEmail={setEmail}
            verificationType={verificationType}
            setVerificationType={setVerificationType}
          />
        )}
        {!otpCorrect && otpSent && (
          <VerifyOTPForm
            onSubmit={verifyOtp}
            otpCode={otpCode}
            setOtpCode={setOtpCode}
          />
        )}
        {otpCorrect && (
          <ChangePasswordForm
            onSubmit={changePassword}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )}
      </Container>
    </>
  );
};

export default ForgetPassword;
