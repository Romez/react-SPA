import React from 'react';
import { Route } from 'react-router';
import VideoPage from './video';

export default (
    <Route>
        <Route component={ VideoPage } path={ VideoPage.path } />
    </Route>
);
