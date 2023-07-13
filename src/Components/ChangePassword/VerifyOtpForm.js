import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const VerifyOTPForm = ({ onSubmit, otpCode, setOtpCode, email }) => (
  <>
    <Box container sx={{ minHeight: '600px', marginTop: '100px' }}>
      <Box
        sx={{ display: 'flex', marginBottom: '32px', justifyContent: 'center' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            component='span'
            sx={{
              color: 'black',
              fontWeight: '700',
              paddingBottom: '24px',
              fontSize: '34px',
            }}
          >
            Verify your phone number
          </Box>
          <Box>The message with verification code will be sent to number</Box>

          <Box
            sx={{
              fontSize: '20px',
              marginTop: '32px',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {email}
          </Box>
          <Box
            sx={{
              display: 'flex',
              marginTop: '32px',
              justifyContent: 'center',
            }}
          >
            <form onSubmit={onSubmit}>
              <TextField
                label='OTP'
                type='text'
                variant='outlined'
                fullWidth
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                required
              />
            </form>
          </Box>
          <Box
            sx={{
              cursor: 'pointer',
              color: 'rgb(3, 188, 102)',
              marginTop: '32px',
            }}
          >
            Resend verification code
          </Box>
          <Box sx={{ width: '100%', marginTop: '32px' }}>
            <Button
              type='submit'
              variant='contained'
              onClick={onSubmit}
              sx={{
                padding: '10px 18px',
                width: '100%',
                fontWeight: 'bold',
                lineHeight: '22px',
                textTransform: 'inherit',
                boxShadow: 'none',
                borderRadius: '10px',
                background:
                  'transparent linear-gradient(180deg, #c5022e 0%, #ea1f4d 100%) 0% 0% no-repeat',
              }}
            >
              <span
                sx={{
                  width: '100%',
                  display: 'inherit',
                  alignItems: 'inherit',
                  justifyContent: 'inherit',
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
export default VerifyOTPForm;