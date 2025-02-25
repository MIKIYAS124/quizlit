import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';

const BookForm = () => {
  const [formData, setFormData] = useState({ title: '', author: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Adding Book:', formData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h5" align="center">Add a Book</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            name="title"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            label="Author"
            name="author"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Book
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default BookForm;
