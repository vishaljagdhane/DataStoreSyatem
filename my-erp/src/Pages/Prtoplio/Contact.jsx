import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ display: 'flex', height: '300px', padding: 2, bgcolor: '#f5f5f5', alignItems: 'center',mt:10 }}>
      <Box sx={{ flex: 1, paddingRight: 1, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>Contact Us</Typography>
        {/* Form Fields */}
        <TextField label="Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Mobile Number" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email Address" variant="outlined" fullWidth margin="normal" />
        <TextField label="Query" variant="outlined" fullWidth multiline rows={2} margin="normal" />
        <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>Submit</Button>
      </Box>
      <Box sx={{ flex: 1, paddingLeft: 1, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>Contact Information</Typography>
        <Typography variant="body1">Phone: <strong>9999992016</strong></Typography>
        <Typography variant="body1" onClick={() => window.location.href = 'mailto:support@sangita.com'} sx={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
          Email: <strong>support@sangita.com</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
