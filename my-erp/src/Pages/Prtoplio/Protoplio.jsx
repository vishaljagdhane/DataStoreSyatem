import { Box } from '@mui/material';
import React from 'react';
import TopBar from './TopBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Footer from './Footer';

export default function Protoplio() {
  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'orange', position: 'relative', display: 'block' }}>
    
        <Box sx={{ bgcolor: '#f5f5f5', height: '200px', position: 'relative', animation: 'fadeIn 1s' }}>
          <Home />
        </Box>
        <Box sx={{ bgcolor: '#e0f7fa', height: '350px', position: 'relative', animation: 'fadeIn 1s' }}>
          <About />
        </Box>
        <Box sx={{ bgcolor: '#e0f7fa', height: '350px', position: 'relative', animation: 'fadeIn 1s',top }}>
          <Contact />
        </Box>
        <Box sx={{ bgcolor: '#f5f5f5', height: 'auto', position: 'relative', animation: 'fadeIn 1s' }}>
          <Login />
        </Box>
    
      </Box>
    </>
  );
}
