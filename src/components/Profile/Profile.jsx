import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector, setUser } from '../../features/auth';

const Profile = () => {
  //* This variable must have the same name it has in store.js
  const { user } = useSelector(userSelector);
  console.log(user.username);

  const logout = () => {
    localStorage.clear(0);
    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp;<ExitToApp />
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
