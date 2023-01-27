import { ReactNode } from 'react';

type RouteType = {
  key: number,
  element: ReactNode,
  index?: boolean,
  path?: string,
  child?: RouteType[],
  sidebarProps?: {
    displayText: string,
    icon?: ReactNode;
  };
};

export default RouteType;
