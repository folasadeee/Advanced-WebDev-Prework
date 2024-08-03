import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import './App.css';

import Homepage from './pages/Homepage/Homepage';
import CreatorDetailsPage from './pages/CreatorDetailsPage/CreatorDetailsPage';
import AddCreator from './pages/AddCreator/AddCreator';

function Routes() {
  let routes = useRoutes([
    {
      path: '/',
      element: <Homepage />,
      // children: [
      //   {
      //     path: 'details',
      //     element: <CreatorDetailsPage />,
      //   },
      // ],
    },
    { path: 'about', element: <h1>About</h1> },
    { path: 'details/:userId', element: <CreatorDetailsPage />},
    { path: 'add', element: <AddCreator />},
    { path: '*', element: <h1>Page Not Found</h1> },
    
  ]);

  return routes;
}

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
