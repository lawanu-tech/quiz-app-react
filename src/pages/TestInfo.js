import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const subjects = ["Math", "JavaScript", "DSA"]; // Add more subjects if needed

const TestInfo = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && subject) {
      localStorage.setItem('user', JSON.stringify({ name, subject }));
      navigate('/start-test');
    } else {
      alert('Please enter your name and select a subject.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '300px',
          padding: '20px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <TextField
          label="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          select
          label="Select Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        >
          {subjects.map((sub) => (
            <MenuItem key={sub} value={sub}>
              {sub}
            </MenuItem>
          ))}
        </TextField>
        <CustomButton
          onClick={handleSubmit}
          style={{ marginTop: '16px', backgroundColor: 'red', color: 'white',width:"100%" }}
         
        >
          Submit
        </CustomButton>
      </Box>
    </Box>
  );
};

export default TestInfo;
