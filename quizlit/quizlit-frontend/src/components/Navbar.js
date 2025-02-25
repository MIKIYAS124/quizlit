import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = ({ toggleTheme }) => { // ✅ Use the correct prop name
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            QuizLit
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <DarkModeToggle onToggle={toggleTheme} /> {/* ✅ Correct prop name */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
