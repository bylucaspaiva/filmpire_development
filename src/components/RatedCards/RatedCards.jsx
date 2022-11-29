import React from 'react';

import { Typography, box } from '@mui/material';
import { Movie } from '..';

import useStyles from './styles';

const RatedCards = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Favorites
      </Typography>
      <Box display="flex" flexWrap="wrap" className={classes.container} />
    </Box>
  );
};

export default RatedCards;
