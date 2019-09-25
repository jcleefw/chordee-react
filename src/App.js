import React from 'react';
import './App.scss';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

import { useRoutes } from 'hookrouter';

const routes = {
  '/': () => <HomePage />,
  '/about': () => <AboutPage />,
  // '/products': () => <ProductOverview />,
  // '/products/:id': ({id}) => <ProductDetails id={id} />
};

const App = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
}


export default App;
