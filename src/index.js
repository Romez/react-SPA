import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import routes from './routes';
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';

export const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                { routes }
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
