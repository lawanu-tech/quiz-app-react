import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ style, onClick, children}) => (
  <Button variant="contained" style={style} onClick={onClick}>
{children}
  </Button>
);

export default CustomButton;
