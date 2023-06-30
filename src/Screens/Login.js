import React, { useState } from 'react';
import axios from 'axios';
import { Alert, Box, Button, Typography } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { BACKEND_BASE_URL } from '../Constants/AppConstants';
import { validateEmail } from '../Components/Util/GlobalValidation';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const [email, setEmail] = useState('');

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(username)) {
      setErrorMsg('Please enter a valid email');
      return;
    }

    try {
      const response = await axios.post(
        `${BACKEND_BASE_URL}/auth/authenticate`,
        {
          email: username,
          password: password,
        },
      );

      const accessToken = response.data.accessToken;
      sessionStorage.setItem('accessToken', accessToken);
      setIsLoggedIn(true);
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };

  if (isLoggedIn) {
    return <Navigate to='/' />;
  }

  return (
    <>
      {errorMsg && <Alert severity='error'>{errorMsg}</Alert>}
      <form onSubmit={handleSubmit} className='form1'>
        {/* <div className="form1_1">
          <div className="form1_2">
            <label>
              <span>Email address or mobile number</span>
            </label>
          </div>

          <div className="form1_4">
            <input
              variant="outlined"
              fullWidth
              placeholder="Enter your email address"
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            
          </div>
        </div> */}

        {/* <div className="form1_1">
          <div className="form1_2">
            <label className="form1_3">
              <span>Password</span>
            </label>
          </div>

          <div className="form1_4">
            <input
              type="password"
              variant="outlined"
              fullWidth
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form1_5"
            ></input>
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
        </div> */}

        <Box mt={2} mb={2} sx={{ flexWrap: 'wrap', width: '100%' }}>
          <div>
            <div className='form1_2'>
              <label>
                <span>Email address</span>
              </label>
            </div>
            <FormControl sx={{ width: '100%' }}>
              <OutlinedInput
                placeholder='Enter your Email Address'
                required
                name='email'
                value={username}
                // label="password"
                className='form1_4'
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  borderRadius: '10px',
                  border: '1px solid #cccccc',

                  color: '#ffffff',
                }}
                // id="outlined-adornment-password"
                type='email'
              />
            </FormControl>
          </div>
        </Box>

        <Box sx={{ flexWrap: 'wrap', width: '100%' }}>
          <div>
            <div className='form1_2'>
              <label>
                <span>Password</span>
              </label>
            </div>
            <FormControl sx={{ width: '100%' }}>
              <OutlinedInput
                placeholder='Enter your password'
                required
                name='password'
                // label="password"
                className='form1_4'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  borderRadius: '10px',
                  border: '1px solid #cccccc',
                  color: '#ffffff',
                }}
                // id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge='end'
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

        <Box className='for1'>
          <Link to='/forget-password'>
            <Button>
              <span>Forgot Password?</span>
            </Button>
          </Link>
        </Box>
        <div className='sign1'>
          <button className='sign2' onClick={handleSubmit}>
            <span>Sign In</span>
          </button>
        </div>

        <div className='con1'>
          <div className='con2'></div>
          <div className='con3'>Continue with</div>
          <div className='con4'></div>
        </div>

        <div>
          <span className='face1'>
            <button className='face2'>
              <button className='face3'>
                <span className='face4'>
                  <picture>
                    <img
                      alt='image'
                      src='https://menu.am/images/icons/facebook-icon.png'
                    />
                  </picture>
                  <div className='face5'>Facebook</div>
                </span>
              </button>
            </button>
          </span>
        </div>

        <div className='goo1'>
          <button className='goo2'>
            <span className='goo3'>
              <picture>
                <img
                  alt='image'
                  src='	https://menu.am/images/icons/google-icon.png'
                />
              </picture>
              <div className='face5'>Google</div>
            </span>
          </button>
        </div>

        <div className='tik1'>
          <label className='tik2'>
            <span className='tik3'>
              <span className='tik4'>
                <input className='tik5' type='checkbox'></input>
                <svg
                  class='tik6'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'></path>
                </svg>
              </span>
            </span>
            <span className='tik7'>
              <div className='tik8'>
                By clicking to "Sign up" button you accept our
                <a className='tik9' href='/'>
                  <span> Terms & Conditions</span>
                </a>
              </div>
            </span>
          </label>
        </div>
      </form>
    </>
  );
};

const Login = () => (
  <Box sx={{ display: 'flex' }}>
    <Box>
      <Box>
        <picture>
          <img
            src='https://menu.am/images/sign-in-up.png'
            alt='Login illustration'
          />
        </picture>
      </Box>
    </Box>

    <Box className='box1'>
      <Box className='box2'>
        <Typography className='box3'>Don't have an account yet?</Typography>
        <Link to='/sign-up'>
          <Button className='button1'>
            <span>Create Account</span>
          </Button>
        </Link>
      </Box>

      <Box className='box2_1'>
        <Box className='box2_2'>
          <Link to='/'>
            <picture>
              <img src='https://menu.am/images/logo.png' alt='Logo' />
            </picture>
          </Link>
        </Box>

        <Typography className='box3_1'>Sign In</Typography>
        <Typography>&nbsp;</Typography>
        <LoginForm />
      </Box>
    </Box>
  </Box>
);

export default Login;
