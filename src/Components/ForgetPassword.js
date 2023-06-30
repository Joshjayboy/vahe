// Form components
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {BACKEND_BASE_URL} from '../Constants/AppConstants';
import {Alert, Button, Container, MenuItem, TextField} from '@mui/material';

const SendOTPForm = ({onSubmit, email, setEmail, verificationType, setVerificationType}) => (
    <form onSubmit={onSubmit}>
        <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
        />
        <TextField
            select
            label="Verification Type"
            variant="outlined"
            fullWidth
            value={verificationType}
            onChange={e => setVerificationType(e.target.value)}
            required
        >
            <MenuItem value="">Select Verification Type</MenuItem>
            <MenuItem value="SMS">SMS</MenuItem>
            <MenuItem value="EMAIL">Email</MenuItem>
        </TextField>
        <Button type="submit" variant="contained">Send OTP</Button>
    </form>
);

const VerifyOTPForm = ({onSubmit, otpCode, setOtpCode}) => (
    <form onSubmit={onSubmit}>
        <TextField
            label="OTP"
            type="text"
            variant="outlined"
            fullWidth
            value={otpCode}
            onChange={e => setOtpCode(e.target.value)}
            required
        />
        <Button type="submit" variant="contained">Verify OTP</Button>
    </form>
);

const ChangePasswordForm = ({onSubmit, password, setPassword, confirmPassword, setConfirmPassword}) => (
    <form onSubmit={onSubmit}>
        <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
        />
        <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
        />
        <Button type="submit" variant="contained">Change Password</Button>
    </form>
);


// Form components
// ...
// (No changes here)

// Main component
const ForgetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [verificationType, setVerificationType] = useState('');
    const [otpCode, setOtpCode] = useState('');
    const [passwordResetToken, setPasswordResetToken] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpCorrect, setOtpCorrect] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const sendOtp = async (e) => {
        e.preventDefault();
        const payload = {email, verificationType};
        try {
            await axios.post(`${BACKEND_BASE_URL}/auth/send-change-password-otp`, payload);
            setOtpSent(true);
            setErrorMessage(null)
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    };

    const verifyOtp = async (e) => {
        e.preventDefault();
        const payload = {email, verificationType, otpCode};
        try {
            const {data} = await axios.post(`${BACKEND_BASE_URL}/auth/verify-change-password`, payload);
            setPasswordResetToken(data.details.passwordResetToken);
            setOtpCorrect(true);
            setErrorMessage(null)
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    };

    const changePassword = async (e) => {
        e.preventDefault();
        const payload = {password, confirmPassword, passwordResetToken, email};
        try {
            await axios.put(`${BACKEND_BASE_URL}/auth/change-password`, payload);
            navigate('/login');
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }

    return (
        <Container>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            {!otpCorrect && !otpSent &&
                <SendOTPForm onSubmit={sendOtp} email={email} setEmail={setEmail} verificationType={verificationType}
                             setVerificationType={setVerificationType}/>
            }
            {!otpCorrect && otpSent &&
                <VerifyOTPForm onSubmit={verifyOtp} otpCode={otpCode} setOtpCode={setOtpCode}/>
            }
            {otpCorrect &&
                <ChangePasswordForm onSubmit={changePassword} password={password} setPassword={setPassword}
                                    confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}/>
            }
        </Container>
    );
};

export default ForgetPassword;


