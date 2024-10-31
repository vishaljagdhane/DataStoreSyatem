import { AppBar, Toolbar, Typography, Box, List, ListItem, ListItemText, Popover, IconButton } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Sangita Software
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
            <Typography variant="body1">Home</Typography>
          </NavLink>
          <NavLink to="/about" style={{ color: 'white', textDecoration: 'none' }}>
            <Typography variant="body1">About</Typography>
          </NavLink>
          <NavLink to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
            <Typography variant="body1">Contact</Typography>
          </NavLink>
          <NavLink to="/login" style={{ color: 'white', textDecoration: 'none' }}>
            <Typography variant="body1">Login</Typography>
          </NavLink>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={handleClick} sx={{ color: 'white' }}>
            <MenuIcon />
          </IconButton>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <List>
              <ListItem button onClick={() => { handleClose(); window.location.href = '/'; }}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={() => { handleClose(); window.location.href = '/about'; }}>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button onClick={() => { handleClose(); window.location.href = '/contact'; }}>
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem button onClick={() => { handleClose(); window.location.href = '/login'; }}>
                <ListItemText primary="Login" />
              </ListItem>
            </List>
          </Popover>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
