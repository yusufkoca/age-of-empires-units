import React from 'react';
import HomePageImage from '../assets/home-page-image.png';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      maxWidth: '100%',
    },
  }),
);

const WelcomeImage = () => {
  const classes = useStyles();
  return <img src={HomePageImage} alt="Welcome Image" className={classes.image} />;
};

export default WelcomeImage;
