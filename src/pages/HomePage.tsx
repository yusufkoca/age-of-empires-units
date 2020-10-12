import React from 'react';
import Box from '@material-ui/core/Box';
import WelcomeImage from '../components/WelcomeImage';

const HomePage = () => {
  return (
    <Box display="flex" width={'100%'} alignItems="center" justifyContent="center">
      <WelcomeImage></WelcomeImage>
    </Box>
  );
};

export default HomePage;
