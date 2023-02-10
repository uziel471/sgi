import React from 'react';
import { Grid } from '@material-ui/core';
import Home from './home';

export default function Index() {
  return (
    <Grid
      container
      component="main"
    >
      <Home />
    </Grid>
  );
}
