import React from 'react';
import { Button, Box, CircularProgress, Grid, Typography } from '@mui/material';
import { useParams, useHistory } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { useGetActorDetailsQuery } from '../../services/TMDB';
import useStyles from './styles';

const Actors = () => {
  const { id } = useParams();
  const { history } = useHistory();
  console.log('id', id);
  const { data, isFetching, error } = useGetActorDetailsQuery(id);
  const classes = useStyles();
  console.log('teste', data, isFetching, error);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onclick={() => history.goBack()} color="primary">
          Go Back!
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data.name}
          />
        </Grid>
        <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body2" gutterBottom>
            { data?.biography || 'Sorry, no biography yet...'}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Actors;
