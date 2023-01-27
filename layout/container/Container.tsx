import { ReactNode } from 'react';
import { Box, Toolbar } from '@mui/material';
import colorConfigs from '../../configs/colorConfigs';
import sizeConfigs from '../../configs/sizeConfigs';
import Sidebar from '../../components/sider-menu/SiderMenu';
import Topbar from '../../components/navbar/Navbar';

type Props = {
  children: ReactNode
};

function MainLayout({ children } : Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Topbar />
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: '100vh',
          backgroundColor: colorConfigs.mainBg,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default MainLayout;
