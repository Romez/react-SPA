import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HomeReducer } from './pages/home/index';
import { ContactReducer } from './pages/contact/index';

export default combineReducers({
    routing: routerReducer,
    ...HomeReducer,
    ...ContactReducer
});
