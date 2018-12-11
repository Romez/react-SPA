import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import routes from './routes';


export const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            { routes }
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
