import React from 'react';

import { Grid } from '@material-ui/core';
import FormLogin from './components/formLogin';

export default function Login() {
  return (
    <Grid
      container
      component="main"
    >
      <FormLogin />
    </Grid>
  );
}
