import {Box, Button, MenuItem, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";

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

    </form>
);
export default SendOTPForm;