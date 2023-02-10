import React, { useState } from 'react';
import {
  Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import colorConfigs from '../../../configs/colorConfigs';
import SidebarItem from './SidebarItem';
import RouteType from '../../../routes/RoutesType';

type Props = {
  item: RouteType;
};

function SidebarItemCollapse({ item }: Props) {
  const [open, setOpen] = useState(false);
  return (
    item.sidebarProps ? (
      <>
        <ListItemButton
          onClick={() => setOpen(!open)}
          sx={{
            '&: hover': {
              backgroundColor: colorConfigs.sidebar.hoverBg,
            },
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
          <ListItemText
            disableTypography
            primary={(
              <Typography>
                {item.sidebarProps.displayText}
              </Typography>
            )}
          />
          {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
        </ListItemButton>
        <Collapse in={open} timeout="auto">
          <List>
            {item?.child?.map((route) => {
              if (route.sidebarProps) {
                return route.child
                  ? <SidebarItemCollapse item={route} key={route.key} />
                  : <SidebarItem item={route} key={route.key} />;
              }
              return null;
            })}
          </List>
        </Collapse>
      </>
    ) : null
  );
}

export default SidebarItemCollapse;
