import { ListItemButton, ListItemIcon } from '@mui/material';
import Link from 'next/link';
import colorConfigs from '../../../configs/colorConfigs';

const appState = 'dashboard';
function SidebarItem({ item }: any) {
  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          '&: hover': {
            backgroundColor: colorConfigs.sidebar.hoverBg,
          },
          backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : 'unset',
          paddingY: '12px',
          paddingX: '24px',
        }}
      >
        <ListItemIcon sx={{
          color: colorConfigs.sidebar.color,
        }}
        >
          {item.sidebarProps.icon ? item.sidebarProps.icon : null}
        </ListItemIcon>
        {item.sidebarProps.displayText}
      </ListItemButton>
    ) : null
  );
}

export default SidebarItem;
