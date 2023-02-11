import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import RouteType from './RoutesType';

const appRoutes: RouteType[] = [
  {
    key: 1,
    index: true,
    element: <h1>Page</h1>,
  },
  {
    key: 2,
    path: '/',
    element: <h1>Hola mundo</h1>,
    sidebarProps: {
      displayText: 'Contractors',
      icon: <CatchingPokemonIcon />,
    },
  },
  {
    key: 3,
    path: '/Users',
    element: <h1>Hola mundo</h1>,
    sidebarProps: {
      displayText: 'Users',
      icon: <CatchingPokemonIcon />,
    },
  },
];

export default appRoutes;
