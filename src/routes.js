import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

import { HomePage, HomeRoutes } from './pages/home/index';
import { ContactRoutes } from './pages/contact/index';
import { AboutRoutes } from './pages/about/index';
import { ListRoutes } from './pages/list/index';

import ErrorPage from './pages/error/index';

export default (
    <Route component={ App } path={ App.path }>
        <IndexRoute component={ HomePage } />

        { HomeRoutes }
        { ContactRoutes }
        { AboutRoutes }
        { ListRoutes }

        <Route path='*' component={ ErrorPage } />
    </Route>
);
