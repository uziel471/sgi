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
      displayText: 'Root',
      icon: <CatchingPokemonIcon />,
    },
  },
];

export default appRoutes;
