import {
  Drawer, List, Stack, Toolbar,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import assets from '../../public/assets';
import colorConfigs from '../../configs/colorConfigs';
import sizeConfigs from '../../configs/sizeConfigs';
import appRoutes from '../../routes/appRoutes';
import SidebarItemCollapse from './components/SidebarItemCollapse';
import SidebarItem from './components/SidebarItem';

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sizeConfigs.sidebar.width,
          boxSizing: 'border-box',
          borderRight: '0px',
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: '20px' }}>
          <Stack
            sx={{ width: '100%' }}
            direction="row"
            justifyContent="center"
          >
            <Avatar src={assets.images.logo} />
          </Stack>
        </Toolbar>
        {appRoutes.map((route) => {
          if (route.sidebarProps) {
            return route.child
              ? <SidebarItemCollapse item={route} key={route.key} />
              : <SidebarItem item={route} key={route.key} />;
          }
          return null;
        })}
      </List>
    </Drawer>
  );
}

export default Sidebar;
