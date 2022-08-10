import React from 'react';
import { useRoutes } from 'react-router-dom';

const TestPage = React.lazy(() => import('./pages/TestPage'));
// importing RemoteApp exposed from another app
// const RemoteApp = React.lazy(() => import('RemoteApp/App'));

const AppRouter = () => {
  const routes = useRoutes([
    // { path: '/', element: <RemoteApp /> },
    { path: '/', element: <div>Home</div> },
    { path: '/test', element: <TestPage /> },
    { path: '/test/:id', element: <div>TestPage</div> },
    { path: '/test/test1', element: <div>TestPage1</div> },
  ]);

  return routes;
};

export default AppRouter;
