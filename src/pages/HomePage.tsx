import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import WelcomeImage from '../components/WelcomeImage';

const HomePage = () => {
  useEffect(() => {
    document.title = 'AeO Home';
  }, []);
  return (
    <Container maxWidth={'md'}>
      <Box display="flex" width={'100%'} alignItems="center" justifyContent="center">
        <WelcomeImage></WelcomeImage>
      </Box>
    </Container>
  );
};

export default HomePage;
