import React from 'react';
import { Typography, Button } from '@mui/material';

import useStyles from './styles';

const Pagination = () => {
  const classes = useStyles();
  const currentPage = 1;

  const handlePrev = () => {

  };

  const handleNext = () => {

  };

  return (
    <div className={classes.container}>
      <Button className={classes.button} onClick={handlePrev} variant="contained" color="primary" type="button">Prev</Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button className={classes.button} onClick={handleNext} variant="contained" color="primary" type="button">Next</Button>
    </div>
  );
};

export default Pagination;
