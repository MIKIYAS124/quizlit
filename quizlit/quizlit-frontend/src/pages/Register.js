import React from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
});

const Register = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h5" align="center">Register</Typography>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log('Registered:', values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="username" as={TextField} label="Username" fullWidth margin="normal" error={touched.username && !!errors.username} helperText={touched.username && errors.username} />
              <Field name="email" as={TextField} label="Email" type="email" fullWidth margin="normal" error={touched.email && !!errors.email} helperText={touched.email && errors.email} />
              <Field name="password" as={TextField} label="Password" type="password" fullWidth margin="normal" error={touched.password && !!errors.password} helperText={touched.password && errors.password} />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Register;
