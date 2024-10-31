import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Prtoplio/Home';
import About from './Pages/Prtoplio/About';
import Contact from './Pages/Prtoplio/Contact';
import Login from './Pages/Prtoplio/Login';
import TopBar from './Pages/Prtoplio/TopBar';
import Footer from './Pages/Prtoplio/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <TopBar />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
