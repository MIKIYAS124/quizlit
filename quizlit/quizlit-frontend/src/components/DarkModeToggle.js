import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

const DarkModeToggle = ({ onToggle }) => { // ✅ Ensure correct prop name
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    if (onToggle) {
      onToggle(); // ✅ Ensure onToggle is defined before calling
    }
  };

  return (
    <IconButton onClick={handleClick} color="inherit">
      {darkMode ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default DarkModeToggle;
