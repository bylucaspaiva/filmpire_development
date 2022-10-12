import React from 'react';

import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, brightness4, brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => {}}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
