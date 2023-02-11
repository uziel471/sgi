import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import colorConfigs from '../../configs/colorConfigs';
import sizeConfigs from '../../configs/sizeConfigs';

function Topbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: 'unset',
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
      }}
    >
      <Toolbar>
        <Typography variant="h6">
          SGI
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
