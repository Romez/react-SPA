import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store'
import routes from './routes';


const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDom.render((
    <Provider store={store}>
        <Router history={ history }>
            { routes }
        </Router>
    </Provider>
), document.querySelector('#app'));
