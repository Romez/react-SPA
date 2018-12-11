import React from 'react';
import { Switch } from 'react-router';

import { HomeRoutes } from './pages/home';
import { ContactRoutes } from './pages/contact';
import { AboutRoutes } from './pages/about';
import { ListRoutes } from './pages/list';
import { VideoRoutes } from './pages/video';

import ErrorPage from './pages/error';

export default (
    <Switch>
        { HomeRoutes }
        { ContactRoutes }
        { AboutRoutes }
        { ListRoutes }
        { VideoRoutes }
        { ErrorPage }
    </Switch>
);
