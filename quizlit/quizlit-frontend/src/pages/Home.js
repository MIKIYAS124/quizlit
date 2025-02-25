import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Welcome to QuizLit!
      </Typography>
      <Grid container spacing={3}>
        {[
          { title: 'Explore Books', desc: 'Find top-rated books in various categories.' },
          { title: 'Register & Login', desc: 'Join and manage your personal book collection.' }
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">{item.desc}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
