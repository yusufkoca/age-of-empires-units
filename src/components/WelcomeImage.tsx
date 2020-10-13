import React from 'react';
import HomePageImage from '../assets/home-page-image-small.jpg';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      maxWidth: '100%',
      padding: theme.spacing(2),
    },
  }),
);

const WelcomeImage = () => {
  const classes = useStyles();
  return <img src={HomePageImage} alt="Welcome to Age of Empires Units" className={classes.image} />;
};

export default WelcomeImage;
