import React, { useState } from 'react';
import { Container, TextField, Button, InputAdornment,Typography } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container sx={{ width: '400px', height: 'auto', display: 'flex', flexDirection: 'column', padding: 2, bgcolor: '#f5f5f5', borderRadius: 2, boxShadow: 2 ,mt:10}}>
      <Typography variant="h5" textAlign="center">Login</Typography>
      <TextField label="Email" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start"><Email /></InputAdornment>
          ),
        }} 
      />
      <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start"><Lock /></InputAdornment>
          ),
        }} 
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;
