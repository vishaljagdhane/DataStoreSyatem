import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" style={{ flexGrow: 1 }}>
          © 2024 Your Company
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
