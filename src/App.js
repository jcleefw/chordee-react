import React from 'react';
import logo from './logo.svg';
import './App.scss';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


import {useRoutes} from 'hookrouter';

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
