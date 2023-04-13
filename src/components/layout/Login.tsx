import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';

import Facebook from '~/svg/facebook.svg';
import Google from '~/svg/google.svg';
import Play from '~/svg/play.svg';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <div className='flex w-full justify-center'>
        <div className='w-full max-w-[550px] pb-4 pt-8'>
          <div className='mb-10 flex flex-col items-center rounded bg-white px-12 pb-9 pt-14 shadow-[0_10px_16px_0_rgba(0,0,0,0.24)]'>
            <p className='pb-7 text-4xl font-bold'>Account Login</p>
            <div className='mb-12 w-full px-12'>
              <TextField
                label='Email'
                name='email'
                variant='outlined'
                className='mb-6 w-full'
              />
              <FormControl
                sx={{ m: 1, width: '100%', margin: '0' }}
                variant='outlined'
              >
                <InputLabel htmlFor='outlined-adornment-password'>
                  Password
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-password'
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Password'
                />
              </FormControl>
            </div>
            <Button
              variant='contained'
              className='button-play relative mb-5 w-full max-w-[168px] bg-[#FF165E] px-5 py-3.5 hover:bg-[#FF165E]'
            >
              <p className='mr-3'>Log in</p>
              <Play className='absolute right-4 h-4 w-3.5' />
            </Button>
            <Divider light className='w-full' />
            <div className='mt-8 flex w-full flex-col items-center'>
              <p className='mb-[18px]'>or log in with</p>
              <div className='flex w-full items-center justify-center gap-4'>
                <Button
                  variant='outlined'
                  className='relative w-full max-w-[160px] rounded-full border-[rgba(0,0,0,0.19)] py-3 font-normal capitalize text-[#4995EF]'
                >
                  <Google className='absolute left-3.5 h-[18px] w-[18px]' />
                  <p className='ml-3'>Google</p>
                </Button>
                <Button
                  variant='outlined'
                  className='relative w-full max-w-[160px] rounded-full border-[rgba(0,0,0,0.19)] py-3 font-normal capitalize text-[#4995EF]'
                >
                  <Facebook className='absolute left-3.5 h-[18px] w-[18px]' />
                  <p className='ml-3'>Facebook</p>
                </Button>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between sm:flex-col sm:gap-4'>
            <div className='flex items-center gap-6'>
              <PrimaryLink href='/' className='text-sm font-medium text-white'>
                Forgot password?
              </PrimaryLink>
              <PrimaryLink href='/' className='text-sm font-medium text-white'>
                Create account
              </PrimaryLink>
            </div>
            <div className='flex items-center gap-6'>
              <PrimaryLink href='/' className='text-sm font-medium text-white'>
                Contact us
              </PrimaryLink>
              <PrimaryLink href='/' className='text-sm font-medium text-white'>
                Terms
              </PrimaryLink>
              <PrimaryLink href='/' className='text-sm font-medium text-white'>
                Policy
              </PrimaryLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
