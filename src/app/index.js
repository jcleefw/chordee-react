import React from 'react';
import '../styles/App.scss';

import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import SongsList from '../pages/SongsList';
import SongView from '../pages/SongView';
import NewSong from '../pages/NewSong';
import NotFoundPage from '../pages/NotFoundPage';

import { useRoutes } from 'hookrouter';

const routes = {
  '/': () => <HomePage />,
  '/songs': () => <SongsList />,
  '/song/:id': ({ id }) => <SongView id={id} />,
  '/new-song': () => <NewSong />,
};

const App = () => {
  const routeResult = useRoutes(routes) || <NotFoundPage />;

  return <div>
    <Header />
    {routeResult}
  </div>
}


export default App;
