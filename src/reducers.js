import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HomeReducer } from './pages/home/index';
import { ContactReducer } from './pages/contact/index';
import { ListReducer } from './pages/list/index';
import { ModalReducer } from './components/modal/index';
import { VideoReducer } from './pages/video/index';

export default combineReducers({
    routing: routerReducer,
    ...HomeReducer,
    ...ContactReducer,
    ...ListReducer,
    ...ModalReducer,
    ...VideoReducer
});
