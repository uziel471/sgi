import React from 'react';
import { Grid } from '@material-ui/core';
import Login from './login/login';

export default function Home() {
  return (
    <Grid
      container
      component="main"
    >
      <Login />
    </Grid>
  );
}
