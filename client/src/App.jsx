import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Box, Typography } from '@mui/material';

export default function App() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Left Sidebar */}
      <Box
        sx={{
          width: 300,
          flexShrink: 0,
          backgroundColor: '#f5f5f5',
          height: '100vh',           
          overflowY: 'hidden'
        }}
      >
        <Navbar />
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4">Main Content</Typography>
      </Box>
    </Box>
  );
}
