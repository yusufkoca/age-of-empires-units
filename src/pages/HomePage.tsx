import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import WelcomeImage from '../components/WelcomeImage';
import { Typography } from '@material-ui/core';

const HomePage = () => {
  useEffect(() => {
    document.title = 'AeO Home';
  }, []);
  return (
    <Container maxWidth={'md'}>
      <Box display="flex" width={'100%'} alignItems="center" justifyContent="center">
        <Typography variant={'h2'}>Home Page</Typography>
      </Box>
      <Box display="flex" width={'100%'} alignItems="center" justifyContent="center">
        <WelcomeImage></WelcomeImage>
      </Box>
    </Container>
  );
};

export default HomePage;
