import React from 'react';
import { Route } from 'react-router';
import AboutPage from './about';


export default (
    <Route>
        <Route component={ AboutPage } path={ AboutPage.path } />
    </Route>
);
