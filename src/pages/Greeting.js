import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Greeting = () => {
  const navigate = useNavigate();
  const score = parseInt(localStorage.getItem('score'), 10);
  const user = JSON.parse(localStorage.getItem('user'));
  const pass = score >= 4; 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        {`Hey ${user.name}`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`You have scored : ${score}/10`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`status : ${pass ? 'PASS' : 'FAIL'}`}
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{ marginTop: '16px', backgroundColor: 'red', color: 'white' }}
      >
        Go to home page
      </Button>
    </Box>
  );
};

export default Greeting;
