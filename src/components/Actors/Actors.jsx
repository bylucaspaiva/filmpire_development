import React from 'react';
import { Button, Box, CircularProgress, Grid, Typography } from '@mui/material';
import { useParams, useHistory } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { useGetActorDetailsQuery } from '../../services/TMDB';

const Actors = () => {
  const { id } = useParams();
  console.log('id', id);
  const { data, isFetching, error } = useGetActorDetailsQuery(id);
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
        <Link to="/">Something has gone wrong - Go back!</Link>
        <Button startIcon={<ArrowBack />} onclick={() => {}} />
      </Box>
    );
  }

  return (
    <Grid container className="" />
  );
};

export default Actors;
