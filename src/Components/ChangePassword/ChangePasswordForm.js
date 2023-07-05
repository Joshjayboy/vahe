import {Box, Button} from "@mui/material";
import React from "react";

const ChangePasswordForm = ({
                                onSubmit,
                                password,
                                setPassword,
                                confirmPassword,
                                setConfirmPassword,
                            }) => (
    <>
        <Box container sx={{minHeight: "600px"}}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "120px",
                    flexDirection: "column",
                }}
            >
                <Box sx={{width: "60%"}}>
                    <Box sx={{textAlign: "center", marginBottom: "56px"}}>
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
                        <Box sx={{width: "30%"}}>
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