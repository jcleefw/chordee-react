import React from 'react';
import '../styles/App.scss';

import HomePage from '../pages/HomePage';
import SongsList from '../pages/SongsList';
import NotFoundPage from '../pages/NotFoundPage';

import { useRoutes } from 'hookrouter';

const routes = {
  '/': () => <HomePage />,
  '/songs': () => <SongsList />,
  // '/products': () => <ProductOverview />,
  // '/products/:id': ({id}) => <ProductDetails id={id} />
};

const App = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
}


export default App;
